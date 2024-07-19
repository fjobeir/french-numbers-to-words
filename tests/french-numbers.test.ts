import FrenchNumbersToWords from "../src/index";

const numberToWords = new FrenchNumbersToWords("fr");
const beNumberToWords = new FrenchNumbersToWords("be");

describe("French numbers to words converter", () => {
  it("Converts basic numbers", () => {
    expect(numberToWords.convert(0).fullText).toBe("zéro");
    expect(numberToWords.convert(1).fullText).toBe("un");
    expect(numberToWords.convert(2).fullText).toBe("deux");
    expect(numberToWords.convert(3).fullText).toBe("trois");
    expect(numberToWords.convert(4).fullText).toBe("quatre");
    expect(numberToWords.convert(5).fullText).toBe("cinq");
    expect(numberToWords.convert(6).fullText).toBe("six");
    expect(numberToWords.convert(7).fullText).toBe("sept");
    expect(numberToWords.convert(8).fullText).toBe("huit");
    expect(numberToWords.convert(9).fullText).toBe("neuf");
    expect(numberToWords.convert(10).fullText).toBe("dix");
    expect(numberToWords.convert(11).fullText).toBe("onze");
    expect(numberToWords.convert(12).fullText).toBe("douze");
    expect(numberToWords.convert(13).fullText).toBe("treize");
    expect(numberToWords.convert(14).fullText).toBe("quatorze");
    expect(numberToWords.convert(15).fullText).toBe("quinze");
    expect(numberToWords.convert(16).fullText).toBe("seize");
    expect(numberToWords.convert(17).fullText).toBe("dix-sept");
    expect(numberToWords.convert(18).fullText).toBe("dix-huit");
    expect(numberToWords.convert(19).fullText).toBe("dix-neuf");
  });
  test("Numbers ending with 1", () => {
    expect(numberToWords.convert(21).fullText).toBe("vingt-et-un");
    expect(numberToWords.convert(31).fullText).toBe("trente-et-un");
    expect(numberToWords.convert(41).fullText).toBe("quarante-et-un");
    expect(numberToWords.convert(51).fullText).toBe("cinquante-et-un");
    expect(numberToWords.convert(61).fullText).toBe("soixante-et-un");
    expect(numberToWords.convert(71).fullText).toBe("soixante-et-onze");
    expect(numberToWords.convert(81).fullText).toBe("quatre-vingt-un");
    expect(numberToWords.convert(91).fullText).toBe("quatre-vingt-onze");
  });
  test("Converts numbers with hundreds", () => {
    expect(numberToWords.convert(100).fullText).toBe("cent");
    expect(numberToWords.convert(101).fullText).toBe("cent-un");
    expect(numberToWords.convert(200).fullText).toBe("deux-cents");
    expect(numberToWords.convert(201).fullText).toBe("deux-cent-un");
    expect(numberToWords.convert(300).fullText).toBe("trois-cents");
    expect(numberToWords.convert(301).fullText).toBe("trois-cent-un");
    expect(numberToWords.convert(400).fullText).toBe("quatre-cents");
    expect(numberToWords.convert(401).fullText).toBe("quatre-cent-un");
    expect(numberToWords.convert(500).fullText).toBe("cinq-cents");
    expect(numberToWords.convert(501).fullText).toBe("cinq-cent-un");
    expect(numberToWords.convert(600).fullText).toBe("six-cents");
    expect(numberToWords.convert(601).fullText).toBe("six-cent-un");
    expect(numberToWords.convert(700).fullText).toBe("sept-cents");
    expect(numberToWords.convert(701).fullText).toBe("sept-cent-un");
    expect(numberToWords.convert(800).fullText).toBe("huit-cents");
    expect(numberToWords.convert(801).fullText).toBe("huit-cent-un");
    expect(numberToWords.convert(900).fullText).toBe("neuf-cents");
    expect(numberToWords.convert(901).fullText).toBe("neuf-cent-un");
  });
  test("Converts numbers with thousands", () => {
    expect(numberToWords.convert(1000).fullText).toBe("mille");
    expect(numberToWords.convert(1001).fullText).toBe("mille-un");
    expect(numberToWords.convert(2000).fullText).toBe("deux-mille");
    expect(numberToWords.convert(2001).fullText).toBe("deux-mille-un");
    expect(numberToWords.convert(3000).fullText).toBe("trois-mille");
    expect(numberToWords.convert(3001).fullText).toBe("trois-mille-un");
    expect(numberToWords.convert(4000).fullText).toBe("quatre-mille");
    expect(numberToWords.convert(4001).fullText).toBe("quatre-mille-un");
    expect(numberToWords.convert(5000).fullText).toBe("cinq-mille");
    expect(numberToWords.convert(5001).fullText).toBe("cinq-mille-un");
    expect(numberToWords.convert(6000).fullText).toBe("six-mille");
    expect(numberToWords.convert(6001).fullText).toBe("six-mille-un");
    expect(numberToWords.convert(7000).fullText).toBe("sept-mille");
    expect(numberToWords.convert(7001).fullText).toBe("sept-mille-un");
    expect(numberToWords.convert(8000).fullText).toBe("huit-mille");
    expect(numberToWords.convert(8001).fullText).toBe("huit-mille-un");
    expect(numberToWords.convert(9000).fullText).toBe("neuf-mille");
    expect(numberToWords.convert(9001).fullText).toBe("neuf-mille-un");
  });
  test("Converts complex numbers", () => {
    expect(numberToWords.convert(12345).fullText).toBe(
      "douze-mille-trois-cent-quarante-cinq"
    );
  });
  test("Converts numbers with millions", () => {
    expect(numberToWords.convert(1000000).fullText).toBe("un-million");
    expect(numberToWords.convert(1000001).fullText).toBe("un-million-un");
    expect(numberToWords.convert(2000000).fullText).toBe("deux-millions");
    expect(numberToWords.convert(2000001).fullText).toBe("deux-millions-un");
    expect(numberToWords.convert(3000000).fullText).toBe("trois-millions");
    expect(numberToWords.convert(3000001).fullText).toBe("trois-millions-un");
    expect(numberToWords.convert(4000000).fullText).toBe("quatre-millions");
    expect(numberToWords.convert(4000001).fullText).toBe("quatre-millions-un");
    expect(numberToWords.convert(5000000).fullText).toBe("cinq-millions");
    expect(numberToWords.convert(5000001).fullText).toBe("cinq-millions-un");
    expect(numberToWords.convert(6000000).fullText).toBe("six-millions");
    expect(numberToWords.convert(6000001).fullText).toBe("six-millions-un");
    expect(numberToWords.convert(7000000).fullText).toBe("sept-millions");
    expect(numberToWords.convert(7000001).fullText).toBe("sept-millions-un");
    expect(numberToWords.convert(8000000).fullText).toBe("huit-millions");
    expect(numberToWords.convert(8000001).fullText).toBe("huit-millions-un");
    expect(numberToWords.convert(9000000).fullText).toBe("neuf-millions");
    expect(numberToWords.convert(9000001).fullText).toBe("neuf-millions-un");
  });
  test("Converts numbers with billions", () => {
    expect(numberToWords.convert(1000000000).fullText).toBe("un-milliard");
    expect(numberToWords.convert(1000000001).fullText).toBe("un-milliard-un");
    expect(numberToWords.convert(2000000000).fullText).toBe("deux-milliards");
    expect(numberToWords.convert(2000000001).fullText).toBe(
      "deux-milliards-un"
    );
    expect(numberToWords.convert(3000000000).fullText).toBe("trois-milliards");
    expect(numberToWords.convert(3000000001).fullText).toBe(
      "trois-milliards-un"
    );
    expect(numberToWords.convert(4000000000).fullText).toBe("quatre-milliards");
    expect(numberToWords.convert(4000000001).fullText).toBe(
      "quatre-milliards-un"
    );
    expect(numberToWords.convert(5000000000).fullText).toBe("cinq-milliards");
    expect(numberToWords.convert(5000000001).fullText).toBe(
      "cinq-milliards-un"
    );
    expect(numberToWords.convert(6000000000).fullText).toBe("six-milliards");
    expect(numberToWords.convert(6000000001).fullText).toBe("six-milliards-un");
    expect(numberToWords.convert(7000000000).fullText).toBe("sept-milliards");
    expect(numberToWords.convert(7000000001).fullText).toBe(
      "sept-milliards-un"
    );
    expect(numberToWords.convert(8000000000).fullText).toBe("huit-milliards");
    expect(numberToWords.convert(8000000001).fullText).toBe(
      "huit-milliards-un"
    );
    expect(numberToWords.convert(9000000000).fullText).toBe("neuf-milliards");
    expect(numberToWords.convert(9000000001).fullText).toBe(
      "neuf-milliards-un"
    );
  });
  test("Converts numbers with trillions", () => {
    expect(numberToWords.convert(1000000000000).fullText).toBe("un-billion");
    expect(numberToWords.convert(1000000000001).fullText).toBe("un-billion-un");
    expect(numberToWords.convert(2000000000000).fullText).toBe("deux-billions");
    expect(numberToWords.convert(2000000000001).fullText).toBe(
      "deux-billions-un"
    );
    expect(numberToWords.convert(3000000000000).fullText).toBe(
      "trois-billions"
    );
    expect(numberToWords.convert(3000000000001).fullText).toBe(
      "trois-billions-un"
    );
    expect(numberToWords.convert(4000000000000).fullText).toBe(
      "quatre-billions"
    );
    expect(numberToWords.convert(4000000000001).fullText).toBe(
      "quatre-billions-un"
    );
    expect(numberToWords.convert(5000000000000).fullText).toBe("cinq-billions");
    expect(numberToWords.convert(5000000000001).fullText).toBe(
      "cinq-billions-un"
    );
    expect(numberToWords.convert(6000000000000).fullText).toBe("six-billions");
    expect(numberToWords.convert(6000000000001).fullText).toBe(
      "six-billions-un"
    );
    expect(numberToWords.convert(7000000000000).fullText).toBe("sept-billions");
    expect(numberToWords.convert(7000000000001).fullText).toBe(
      "sept-billions-un"
    );
    expect(numberToWords.convert(8000000000000).fullText).toBe("huit-billions");
    expect(numberToWords.convert(8000000000001).fullText).toBe(
      "huit-billions-un"
    );
    expect(numberToWords.convert(9000000000000).fullText).toBe("neuf-billions");
    expect(numberToWords.convert(9000000000001).fullText).toBe(
      "neuf-billions-un"
    );
    expect(numberToWords.convert(459554768223001).fullText).toBe(
      "quatre-cent-cinquante-neuf-billions-cinq-cent-cinquante-quatre-milliards-sept-cent-soixante-huit-millions-deux-cent-vingt-trois-mille-un"
    );
  });
  test("Mix complex numbers", () => {
    expect(numberToWords.convert(1234567890).fullText).toBe(
      "un-milliard-deux-cent-trente-quatre-millions-cinq-cent-soixante-sept-mille-huit-cent-quatre-vingt-dix"
    );
    expect(numberToWords.convert(1234567891).fullText).toBe(
      "un-milliard-deux-cent-trente-quatre-millions-cinq-cent-soixante-sept-mille-huit-cent-quatre-vingt-onze"
    );
    expect(numberToWords.convert(2234567092).fullText).toBe(
      "deux-milliards-deux-cent-trente-quatre-millions-cinq-cent-soixante-sept-mille-quatre-vingt-douze"
    );
    expect(numberToWords.convert(713234567093).fullText).toBe(
      "sept-cent-treize-milliards-deux-cent-trente-quatre-millions-cinq-cent-soixante-sept-mille-quatre-vingt-treize"
    );
  });
  it("Converts numbers with decimal parts", () => {
    expect(numberToWords.convert(123.45).fullText).toBe(
      "cent-vingt-trois virgule quarante-cinq"
    );
    // big decimals may change while converting
    expect(numberToWords.convert(749334909169.197334590001).fullText).toBe(
      "sept-cent-quarante-neuf-milliards-trois-cent-trente-quatre-millions-neuf-cent-neuf-mille-cent-soixante-neuf virgule mille-neuf-cent-soixante-quatorze"
    );
  });
  test("Belgian numbers", () => {
    expect(beNumberToWords.convert(21).fullText).toBe("vingt-et-un");
    expect(beNumberToWords.convert(31).fullText).toBe("trente-et-un");
    expect(beNumberToWords.convert(41).fullText).toBe("quarante-et-un");
    expect(beNumberToWords.convert(51).fullText).toBe("cinquante-et-un");
    expect(beNumberToWords.convert(61).fullText).toBe("soixante-et-un");
    expect(beNumberToWords.convert(71).fullText).toBe("septante-et-un");
    expect(beNumberToWords.convert(81).fullText).toBe("quatre-vingt-un");
    expect(beNumberToWords.convert(91).fullText).toBe("nonante-et-un");
  });
  test("Handles invalid inputs gracefully", () => {
    expect(() => numberToWords.convert(null as unknown as number)).toThrow(
      "Please provide a valid number"
    );
  });
});
