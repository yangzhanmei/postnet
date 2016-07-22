'use strict';

const main = require('../main/postcode');

describe('getBarcodes', ()=> {
    it('can return correct result', ()=> {
        const barcode = '|:|::|:|:|:||::::||:::::||:|::||';
        const barcodes = main.getBarcodes(barcode);
        const expectBarcodes = [':|::|', ':|:|:', '||:::', ':||::', ':::||', ':|::|'];

        expect(barcodes).toEqual(expectBarcodes);
    })
});

describe('buildPostcodes', ()=> {
    it('can return correct result', ()=> {
        const barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        const barcodes = main.getBarcodes(barcode);
        const postcodes = main.buildPostcodes(barcodes);
        const expectBarcodes = [4, 5, 0, 5, 6, 1, 2, 3, 4, 0];

        expect(postcodes).toEqual(expectBarcodes);
    })
});

describe('buildPostcodeText', ()=> {
    let barcode;
    it('if five', ()=> {
        barcode = '|:|::|:|:|:||::::||:::::||:|::||';
        const barcodes = main.getBarcodes(barcode);
        const postcodes = main.buildPostcodes(barcodes);
        const postcodeText = main.buildPostcodeText(postcodes);
        const expectpostcodeText = `45061`;

        expect(postcodeText).toEqual(expectpostcodeText);
    });
    it('if ten', ()=> {
        barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        const barcodes = main.getBarcodes(barcode);
        const postcodes = main.buildPostcodes(barcodes);
        const postcodeText = main.buildPostcodeText(postcodes);
        const expectpostcodeText = `45056-1234`;

        expect(postcodeText).toEqual(expectpostcodeText);
    })
});
