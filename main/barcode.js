'use strict';
function checkPostcode(postcode) {
    if (postcode.length === 5 || postcode.length === 9 || postcode.length === 10) {
        return true;
    }
    return false;
}

function getPostcodes(postcode) {
    if (checkPostcode(postcode)) {
        return postcode.split('')
            .filter(code=>code != '-')
            .map(postcode=>parseInt(postcode));
    }
}

function appendCheckCode(postcodes) {
    let checkCode = 10 - postcodes.reduce((a, b)=>a + b) % 10;
    postcodes.push(checkCode);

    return postcodes;
}

function loadCode() {

    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::', '||:::'];
}

function buildBarcodes(checkCodes) {
    let codes = loadCode();
    return checkCodes.map(checkCode=>codes[checkCode]);
}

function buildBarcodeText(barcodes) {
    let barcodeText = barcodes.map(barcode=> `${barcode}`).join('');

    return `|${barcodeText}|`;
}

module.exports = {
    getPostcodes: getPostcodes,
    appendCheckCode: appendCheckCode,
    buildBarcodes: buildBarcodes,
    buildBarcodeText: buildBarcodeText
};