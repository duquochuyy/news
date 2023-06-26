'use strict';

const helper = {}

helper.handleSelected = (array, item) => {
    if (array.includes(item.id)) {
        return `<option value="${item.id}" selected>${item.name}</option>`
    }
    else {
        return `<option value="${item.id}">${item.name}</option>`
    }
}

module.exports = helper;