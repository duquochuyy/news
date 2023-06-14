"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
        {
        "name": "Barry Fuller",
        "email": "bfuller0@feedburner.com",
        "username": "bfuller0",
        "phone": "292-539-5755",
        "sex": true,
        "birthday": "2009-05-15",
        "password": "qH8_uB{\\ge~aOo"
      }, {
        "name": "Rafael Keynd",
        "email": "rkeynd1@amazon.co.jp",
        "username": "rkeynd1",
        "phone": "958-170-8226",
        "sex": false,
        "birthday": "2001-11-10",
        "password": "fC6'7UdcIxG(w<T&"
      }, {
        "name": "Harmonia Feaks",
        "email": "hfeaks2@jimdo.com",
        "username": "hfeaks2",
        "phone": "475-529-0937",
        "sex": false,
        "birthday": "1996-04-25",
        "password": "fJ7,28tqpC)/"
      }, {
        "name": "Ruy Ferencowicz",
        "email": "rferencowicz3@jimdo.com",
        "username": "rferencowicz3",
        "phone": "145-457-2588",
        "sex": true,
        "birthday": "2010-11-25",
        "password": "mL1<U.B*PKoPTP2"
      }, {
        "name": "Constantia Cuskery",
        "email": "ccuskery4@noaa.gov",
        "username": "ccuskery4",
        "phone": "580-836-4647",
        "sex": false,
        "birthday": "2009-11-29",
        "password": "cP9(sctFY=TZqA"
      }, {
        "name": "Ginger Anscombe",
        "email": "ganscombe5@soundcloud.com",
        "username": "admin",
        "phone": "965-258-0567",
        "sex": false,
        "birthday": "1993-10-24",
        "password": "admin"
      }, {
        "name": "Angil Aylesbury",
        "email": "aaylesbury6@un.org",
        "username": "aaylesbury6",
        "phone": "999-509-3233",
        "sex": false,
        "birthday": "1994-05-08",
        "password": "rC6+|RV%"
      }, {
        "name": "Land Trenouth",
        "email": "ltrenouth7@intel.com",
        "username": "ltrenouth7",
        "phone": "159-112-9394",
        "sex": false,
        "birthday": "1997-02-20",
        "password": "rA8'SD'r=*9>ES"
      }, {
        "name": "Chantal Aikin",
        "email": "caikin8@imdb.com",
        "username": "caikin8",
        "phone": "470-199-7940",
        "sex": false,
        "birthday": "2010-08-14",
        "password": "pW7?QHOVl@\\VX"
      }, {
        "name": "Sophie Winear",
        "email": "swinear9@vk.com",
        "username": "swinear9",
        "phone": "492-580-2941",
        "sex": true,
        "birthday": "2008-12-07",
        "password": "mU2<Kw2z%oT>PS?Q"
      }, {
        "name": "Josy Lante",
        "email": "jlantea@shareasale.com",
        "username": "hehhee",
        "phone": "184-991-5547",
        "sex": true,
        "birthday": "1992-05-31",
        "password": "hehehehe"
      }, {
        "name": "Rikki Saxon",
        "email": "rsaxonb@epa.gov",
        "username": "rsaxonb",
        "phone": "242-843-9639",
        "sex": false,
        "birthday": "2012-01-08",
        "password": "dY9('8!S6fK"
      }, {
        "name": "Rozalie Kolushev",
        "email": "rkolushevc@instagram.com",
        "username": "rkolushevc",
        "phone": "554-129-5283",
        "sex": true,
        "birthday": "1993-02-09",
        "password": "bM6&PZjWL4~K"
      }, {
        "name": "Taite Balke",
        "email": "tbalked@phpbb.com",
        "username": "tbalked",
        "phone": "799-792-9400",
        "sex": false,
        "birthday": "2004-05-25",
        "password": "nM5}VrL9"
      }, {
        "name": "Alon Nussey",
        "email": "anusseye@sun.com",
        "username": "anusseye",
        "phone": "168-767-5405",
        "sex": false,
        "birthday": "2009-04-25",
        "password": "iH7|p_&we"
      }, {
        "name": "Brenna Giacoppoli",
        "email": "bgiacoppolif@imgur.com",
        "username": "bgiacoppolif",
        "phone": "413-537-5163",
        "sex": false,
        "birthday": "1991-04-11",
        "password": "gW1@ySi.J}+Eo\\sa"
      }, {
        "name": "Philippine Vinnicombe",
        "email": "pvinnicombeg@nps.gov",
        "username": "pvinnicombeg",
        "phone": "875-532-4813",
        "sex": true,
        "birthday": "1999-11-28",
        "password": "aJ2'3<r@'ULSdZ7+"
      }, {
        "name": "Juana Jouannin",
        "email": "jjouanninh@freewebs.com",
        "username": "jjouanninh",
        "phone": "798-940-6831",
        "sex": false,
        "birthday": "1996-06-10",
        "password": "sV4!@/j_,C"
      }, {
        "name": "Zorine Ivanyukov",
        "email": "zivanyukovi@xinhuanet.com",
        "username": "zivanyukovi",
        "phone": "361-297-0909",
        "sex": false,
        "birthday": "1999-09-13",
        "password": "hR8%Ad\\72VNv"
      }, {
        "name": "Maureene Tuxell",
        "email": "mtuxellj@nature.com",
        "username": "mtuxellj",
        "phone": "881-795-3604",
        "sex": true,
        "birthday": "2005-09-28",
        "password": "oS8\\h%K$TSZ$K\""
      }, {
        "name": "Ardene Anneslie",
        "email": "aannesliek@scientificamerican.com",
        "username": "aannesliek",
        "phone": "747-787-7659",
        "sex": false,
        "birthday": "1997-09-30",
        "password": "dT5\\>k|C%hk+Lu|"
      }, {
        "name": "Licha Mallard",
        "email": "lmallardl@businesswire.com",
        "username": "lmallardl",
        "phone": "537-874-0850",
        "sex": false,
        "birthday": "2006-07-01",
        "password": "lX1()t|@"
      }, {
        "name": "Zilvia Chasemoore",
        "email": "zchasemoorem@google.ru",
        "username": "zchasemoorem",
        "phone": "570-936-8086",
        "sex": true,
        "birthday": "1992-05-01",
        "password": "lE4)Da|)fa?<G"
      }, {
        "name": "Cedric Highnam",
        "email": "chighnamn@acquirethisname.com",
        "username": "chighnamn",
        "phone": "135-693-5951",
        "sex": false,
        "birthday": "2002-06-27",
        "password": "wS9/jNpidK,~=tA,"
      }, {
        "name": "Aaren Treneman",
        "email": "atrenemano@histats.com",
        "username": "atrenemano",
        "phone": "648-572-8885",
        "sex": true,
        "birthday": "1993-11-15",
        "password": "cI8|xG(l#99"
      }, {
        "name": "Roselin Foldes",
        "email": "rfoldesp@ucoz.ru",
        "username": "rfoldesp",
        "phone": "699-643-8914",
        "sex": false,
        "birthday": "2010-06-12",
        "password": "vS2'ruuQ6PU&47C7"
      }, {
        "name": "Otho Spurling",
        "email": "ospurlingq@sbwire.com",
        "username": "ospurlingq",
        "phone": "315-247-7541",
        "sex": false,
        "birthday": "1999-11-13",
        "password": "hV2%*aFd,_ATUQ/P"
      }, {
        "name": "Fabian Wark",
        "email": "fwarkr@ebay.com",
        "username": "fwarkr",
        "phone": "590-248-4968",
        "sex": true,
        "birthday": "2008-09-22",
        "password": "bW1\\9`|.jk.P+!+5"
      }, {
        "name": "Berne Lippitt",
        "email": "blippitts@aboutads.info",
        "username": "blippitts",
        "phone": "799-127-7726",
        "sex": true,
        "birthday": "2008-09-26",
        "password": "pN6_Y}yxy"
      }, {
        "name": "Issy Benjafield",
        "email": "ibenjafieldt@hp.com",
        "username": "ibenjafieldt",
        "phone": "730-917-1871",
        "sex": false,
        "birthday": "2004-07-05",
        "password": "vQ9&~*}Y@b/49"
      }, {
        "name": "Ileana Pedrazzi",
        "email": "ipedrazziu@posterous.com",
        "username": "ipedrazziu",
        "phone": "974-125-9309",
        "sex": true,
        "birthday": "2011-12-23",
        "password": "zL5)(eG\""
      }, {
        "name": "Holmes Samson",
        "email": "hsamsonv@people.com.cn",
        "username": "hsamsonv",
        "phone": "520-770-6115",
        "sex": false,
        "birthday": "2010-05-21",
        "password": "dA7@'_.gQ"
      }, {
        "name": "Roshelle Gammons",
        "email": "rgammonsw@163.com",
        "username": "rgammonsw",
        "phone": "949-248-3803",
        "sex": false,
        "birthday": "1991-04-20",
        "password": "pA2*f#ip</(aSA$"
      }, {
        "name": "Zechariah Gobel",
        "email": "zgobelx@businessweek.com",
        "username": "zgobelx",
        "phone": "675-294-1211",
        "sex": false,
        "birthday": "2012-09-25",
        "password": "uL3@W8DwA"
      }, {
        "name": "Ignace Spinage",
        "email": "ispinagey@odnoklassniki.ru",
        "username": "ispinagey",
        "phone": "542-504-9312",
        "sex": false,
        "birthday": "1993-10-06",
        "password": "wC4<Egr?RC$L$\"s"
      }, {
        "name": "Fern Trenam",
        "email": "ftrenamz@noaa.gov",
        "username": "ftrenamz",
        "phone": "927-168-1812",
        "sex": false,
        "birthday": "2010-07-03",
        "password": "bI3%teyvHWr"
      }, {
        "name": "Estelle Marfield",
        "email": "emarfield10@qq.com",
        "username": "emarfield10",
        "phone": "977-147-0979",
        "sex": false,
        "birthday": "2004-02-20",
        "password": "vC4<PnK}pX!|Q"
      }, {
        "name": "Frans Suddick",
        "email": "fsuddick11@linkedin.com",
        "username": "fsuddick11",
        "phone": "432-142-7216",
        "sex": true,
        "birthday": "1993-07-20",
        "password": "xE2|n0BT'X_Z?"
      }, {
        "name": "Mozes Honnicott",
        "email": "mhonnicott12@yahoo.com",
        "username": "mhonnicott12",
        "phone": "249-616-9507",
        "sex": false,
        "birthday": "2001-05-03",
        "password": "mA5\"4e6RGJu"
      }, {
        "name": "Alexis Domone",
        "email": "adomone13@delicious.com",
        "username": "adomone13",
        "phone": "288-502-6579",
        "sex": true,
        "birthday": "2008-02-16",
        "password": "fY9'c92=7w"
      }]
      
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Users", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
