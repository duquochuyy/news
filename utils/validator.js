'use strict';

const { body, validationResult } = require('express-validator');

function getErrorMessage(req) {
    let errors = validationResult(req);
    let hasError = false;
    if (!errors.isEmpty()) {

        let errorArray = errors.array();
        return errorArray.reduce((message, error) => {
            if (!hasError) {
                return message + error.msg;
            }
            return '';
        }, '');
    }
    return null;
}

module.exports = { body, getErrorMessage };
