'use strict';

const main = require('../main/barcode');

describe('getPostcodes', () => {

    let postcode;
    it('if five or nine digits', ()=> {
        postcode = '45061';
        const postcodes = main.getPostcodes(postcode);
        const expectPostcodes = [4, 5, 0, 6, 1];

        expect(postcodes).toEqual(expectPostcodes);
    });

    it('if ten digits', ()=> {
        postcode = '45061-1234';
        const postcodes = main.getPostcodes(postcode);
        const expectPostcodes = [4, 5, 0, 6, 1, 1, 2, 3, 4];

        expect(postcodes).toEqual(expectPostcodes);
    });

});

describe('appendCheckCode', () => {
    it('can return correct result', ()=> {
        const postcode = '45061';
        const postcodes = main.getPostcodes(postcode);
        const checkCode = main.appendCheckCode(postcodes);
        const expectCheckCode = [4, 5, 0, 6, 1, 4];

        expect(checkCode).toEqual(expectCheckCode);
    })
});

describe('buildBarcodes', () => {
    it('can return correct result', ()=> {
        const postcode = '45061';
        const postcodes = main.getPostcodes(postcode);
        const checkCode = main.appendCheckCode(postcodes);
        const barcodes = main.buildBarcodes(checkCode);
        const expectBarcodes = [':|::|', ':|:|:', '||:::', ':||::', ':::||', ':|::|'];

        expect(barcodes).toEqual(expectBarcodes);
    })
});

describe('buildBarcodes', () => {
    it('can return correct result', ()=> {
        const postcode = '45061';
        const postcodes = main.getPostcodes(postcode);
        const checkCode = main.appendCheckCode(postcodes);
        const barcodes = main.buildBarcodes(checkCode);
        const barcodeText = main.buildBarcodeText(barcodes);
        const expectBarcodeText = `|:|::|:|:|:||::::||:::::||:|::||`;

        expect(barcodeText).toEqual(expectBarcodeText);
    })
});