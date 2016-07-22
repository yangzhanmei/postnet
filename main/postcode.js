'use strict';
function checkBarcode(barcode) {
    if (barcode.length === 32 || barcode.length === 52) {
        return true;
    }
    return null;
}

function getBarcodes(barcode) {
    let barcodes = [];
    
    if (checkBarcode(barcode) != null) {
        let barcodeArray = barcode.substring(1, barcode.length - 1);
        let array = '';
        for (let i = 0; i < barcodeArray.length; i++) {
            
            array += barcodeArray[i];
            if (array.length % 5 === 0) {
                barcodes.push(array);
                array = '';
            }
        }
    }
    return barcodes;
}

function loadWeight() {
    return [7, 4, 2, 1, 0];
}

function buildPostcodes(barcodes) {
    const weights = loadWeight();
    
    return barcodes.map(barcode => {

        const sum = barcode
            .split('')
            .map(line => line === '|' ? 1 : 0)
            .reduce((prev, curr, index) => prev + curr * weights[index], 0);

        return (sum === 11) ? 0 : sum;
    })
}

function checkPostcodes(postcodes) {
    if (postcodes.reduce((a, b)=>a + b) % 10 === 0) {
        return true;
    }
    return false;
}

function buildPostcodeText(postcodes) {
    if (checkPostcodes(postcodes)) {
        const postcodeText = postcodes.join('');

        return postcodeText.length > 6
            ? `${postcodeText.substring(0, 5)}-${postcodeText.substring(5, postcodeText.length - 1)}`
            : `${postcodeText.substring(0, 5)}`;
    }
}

module.exports = {
    getBarcodes: getBarcodes,
    buildPostcodes: buildPostcodes,
    buildPostcodeText: buildPostcodeText
};
