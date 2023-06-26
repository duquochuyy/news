"use strict";

const controller = {};
const models = require("../models");
const sequelize = require("sequelize");

/*
test momo:
NGUYEN VAN A
9704 0000 0000 0018
03/07
OTP
*/

controller.payment = async (req, res) => {
    const id = (req.isAuthenticated()) ? req.user.id : 0;
    // const id = 12;

    if (id == 0) {
        return res.redirect(`/auth/login?reqUrl=${req.originalUrl}`);
    }
    
    const infor = `{"id": ${id}}`
    console.log("base64" + btoa(infor));
    //https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
    //parameters
    var urlReturn = `${req.protocol}://${req.headers.host}/thanks`
    var accessKey = 'F8BBA842ECF85';
    var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
    var orderInfo = 'Thanh toán MoMo để đăng ký tài khoản Premium';
    var partnerCode = 'MOMO';
    var redirectUrl = urlReturn;
    var ipnUrl = urlReturn;
    var requestType = "payWithMethod";
    var amount = '49000';
    var orderId = partnerCode + new Date().getTime();
    var requestId = orderId;
    var extraData = String(btoa(infor));
    var paymentCode = 'T8Qii53fAXyUftPV3m9ysyRhEanUs9KlOPfHgpMR0ON50U10Bh+vZdpJU7VY4z+Z2y77fJHkoDc69scwwzLuW5MzeUKTwPo3ZMaB29imm6YulqnWfTkgzqRaion+EuD7FN9wZ4aXE1+mRt0gHsU193y+yxtRgpmY7SDMU9hCKoQtYyHsfFR5FUAOAKMdw2fzQqpToei3rnaYvZuYaxolprm9+/+WIETnPUDlxCYOiw7vPeaaYQQH0BF0TxyU3zu36ODx980rJvPAgtJzH1gUrlxcSS1HQeQ9ZaVM1eOK/jl8KJm6ijOwErHGbgf/hVymUQG65rHU2MWz9U8QUjvDWA==';
    var orderGroupId = '';
    var autoCapture = true;
    var lang = 'vi';

    console.log(`extra data: ${extraData}`);
    // var payUrl;

    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;
    //puts raw signature
    console.log("--------------------RAW SIGNATURE----------------")
    console.log(rawSignature)
    //signature
    const crypto = require('crypto');
    var signature = crypto.createHmac('sha256', secretKey)
        .update(rawSignature)
        .digest('hex');
    console.log("--------------------SIGNATURE----------------")
    console.log(signature)

    //json object send to MoMo endpoint
    const requestBody = JSON.stringify({
        partnerCode: partnerCode,
        partnerName: "Test",
        storeId: "MomoTestStore",
        requestId: requestId,
        amount: amount,
        orderId: orderId,
        orderInfo: orderInfo,
        redirectUrl: redirectUrl,
        ipnUrl: ipnUrl,
        lang: lang,
        requestType: requestType,
        autoCapture: autoCapture,
        extraData: extraData,
        orderGroupId: orderGroupId,
        signature: signature
    });
    //Create the HTTPS objects
    const https = require('https');
    const options = {
        hostname: 'test-payment.momo.vn',
        port: 443,
        path: '/v2/gateway/api/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(requestBody)
        }
    }

    let payUrl = '';
    const payUrlPromise = await new Promise((resolve, reject) => {
        const request = https.request(options, (response) => {
            console.log(`Status: ${response.statusCode}`);
            console.log(`Headers: ${JSON.stringify(response.headers)}`);
            response.setEncoding('utf8');
            response.on('data', (body) => {
                console.log('Body: ');
                console.log(body);
                console.log('resultCode: ');
                console.log(JSON.parse(body).resultCode);
                payUrl = JSON.parse(body).payUrl;
            });
            response.on('end', () => {
                console.log('No more data in response.');
                resolve(payUrl);
            });
            
        })
        console.log("Sending....")
        request.write(requestBody);
        request.end();
    })


    console.log(`payUrl: ${payUrl}`);
    res.redirect(payUrl);
}

controller.result = async (req, res) => {
    // console.log("hello" + req.query.extraData);
    // console.log("hello2" + atob(req.query.extraData))

    const idUser = isNaN(JSON.parse(atob(req.query.extraData)).id) ? 0 : parseInt(JSON.parse(atob(req.query.extraData)).id);
    console.log(`Id user buy: ${idUser}`);
    const user = await models.User.findOne({ where: {id : idUser} });

    // kiểm tra id người mua có đúng không
    if (!user) {
        return res.render('thanks', {message: 'Error User!'});
    }

    // check xem userId đã từng mua chưa, nếu có thì xóa 
    const userInSubscriber = await models.Subscriber.findOne({where: {userId: idUser}});
    if (userInSubscriber) {
        await models.Subscriber.destroy({
            where: {userId: idUser}
        })
    }

    const intervalTime = 24*7;
    const newUserSubcriber = await models.Subscriber.create({
        subscribeDate: sequelize.literal('NOW()'),
        expireDate: sequelize.literal(`NOW() + INTERVAL '${intervalTime} hour'`),
        userId: idUser
    })

    if (newUserSubcriber) {
        console.log(newUserSubcriber);
    }

    res.render('thanks', {message: 'Bạn đã đăng kí thành công tài khoản Premium. Thanks!'});
}

module.exports = controller;
