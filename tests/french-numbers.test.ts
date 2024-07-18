import FrenchNumbersToWords from "../src/index";

describe('French numbers to words converter', () => {
  it('should convert number to words correctly', () => {
    const numberToWords = new FrenchNumbersToWords('fr')
    expect(numberToWords.convert(1).fullText).toBe('un');
    expect(numberToWords.convert(2).fullText).toBe('deux');
    expect(numberToWords.convert(3).fullText).toBe('trois');
    expect(numberToWords.convert(4).fullText).toBe('quatre');
    expect(numberToWords.convert(5).fullText).toBe('cinq');
    expect(numberToWords.convert(6).fullText).toBe('six');
    expect(numberToWords.convert(7).fullText).toBe('sept');
    expect(numberToWords.convert(8).fullText).toBe('huit');
    expect(numberToWords.convert(9).fullText).toBe('neuf');
    expect(numberToWords.convert(10).fullText).toBe('dix');
    expect(numberToWords.convert(11).fullText).toBe('onze');
    expect(numberToWords.convert(12).fullText).toBe('douze');
    expect(numberToWords.convert(13).fullText).toBe('treize');
    expect(numberToWords.convert(14).fullText).toBe('quatorze');
    expect(numberToWords.convert(15).fullText).toBe('quinze');
    expect(numberToWords.convert(12345).fullText).toBe('douze-mille trois-cent-quarante-cinq');
  });
});