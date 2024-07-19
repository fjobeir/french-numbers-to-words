type FrenchLanguage = "fr" | "be";
type FrenchUnits = {
  [key: number]: string;
};
type ResultPart = {
  number: number;
  text: string;
  unit: string;
};

class FrenchNumbersToWords {
  french: FrenchLanguage = "fr";
  number: number = 0;
  numberParts: Array<number> = [];
  result: {
    parts: Array<ResultPart>;
    fullText: string;
  } = {
    parts: [],
    fullText: "",
  };
  units: FrenchUnits = {
    0: "zéro",
    1: "un",
    2: "deux",
    3: "trois",
    4: "quatre",
    5: "cinq",
    6: "six",
    7: "sept",
    8: "huit",
    9: "neuf",
    10: "dix",
    11: "onze",
    12: "douze",
    13: "treize",
    14: "quatorze",
    15: "quinze",
    16: "seize",
  };
  tens: {
    [key in FrenchLanguage]: {
      [key: number]: string;
    };
  } = {
    be: {
      10: "dix",
      20: "vingt",
      30: "trente",
      40: "quarante",
      50: "cinquante",
      60: "soixante",
      70: "septante",
      80: "quatre-vingt",
      90: "nonante",
    },
    fr: {
      10: "dix",
      20: "vingt",
      30: "trente",
      40: "quarante",
      50: "cinquante",
      60: "soixante",
      70: "soixante-dix",
      80: "quatre-vingt",
      90: "quatre-vingt-dix",
    },
  };
  // The units that we use depending on digits count in the number
  groups: Array<{
    single: string;
    plural: string;
  }> = [
    {
      single: "",
      plural: "",
    },
    {
      single: "mille",
      plural: "mille",
    },
    {
      single: "million",
      plural: "millions",
    },
    {
      single: "milliard",
      plural: "milliards",
    },
  ];

  // We need the number and to define which version of French we are using
  constructor(french: FrenchLanguage = "fr") {
    this.french = french;
  }

  convert(number: number) {
    if (typeof number !== "number") {
      throw new Error("Please provide a valid number");
    }
    this.number = Math.floor(number);
    this.splitNumberPerLength();
    if (number < 0) {
      this.result.fullText = "moins " + this.result.fullText;
    }
    if (number === 1000000) {
      console.log(this.result);
    }
    return this.result;
  }

  splitNumberPerLength() {
    this.result.parts = [];
    // we will split the number to groups
    // each group has three digits. Ex: 12345 will have two groups: 12 (for thousands) and 345
    this.numberParts = this.number.toLocaleString().split(",").map(Number);
    let n: number, full: ResultPart;
    for (let j = 0; j < this.numberParts.length; j++) {
      n = this.numberParts[j];
      full = {
        number: n,
        text: this.hundredsConverter(n),
        unit: this.getGroupNameByIndex(j),
      };
      this.result.parts.push(full);
    }
    if (this.number === 1000000) {
      console.log(this.result.parts);
    }
    this.result.fullText = this.generateFullText();
    return this.result;
  }

  generateFullText(): string {
    return this.result.parts
      .map((part) => {
        let txt = [];
        if (
          (part.number === 0 && this.result.parts.length === 1) ||
          ((part.unit === "" || part.number > 1) && part.number > 0) ||
          (part.number > 0 && part.unit !== "mille" && part.unit)
        ) {
          txt.push(part.text);
        }

        if (part.unit && part.number > 0) {
          txt.push(part.unit);
        }

        return txt.length ? txt.join("-") : null;
      })
      .filter(Boolean)
      .join("-")
      .trim();
  }

  /**
   * Due to the rules of French language, we convert the hundreds part and the tens part seperately
   * @param  {[number]} n the number we want to convert to a word
   * @return {[string]}    number being converted to a word
   */
  tensConverter(n: number | null = null): string {
    const num = n ?? this.number;
    let result = "";
    if (num % 10 === 0 && num > 0) {
      // check in tens
      result = this.tens[this.french][num];
      // apply the plural format to 80
      if (num == 80) {
        result += "s";
      }
      return result;
    } else if (this.units[num]) {
      return this.units[num];
    }
    // get the parts of the number, ex: 58 will be an array of [5, 8]
    const numberParts = num.toString().split("").map(Number);
    // get the number word from tens array, taking the french type in mind
    result = this.tens[this.french][parseInt(`${numberParts[0]}0`, 10)] + "-";
    if (numberParts[1] == 1 && numberParts[0] < 7) {
      // if the number is less than 70
      result += "et-" + this.units[numberParts[1]];
    } else if (numberParts[0] < 7 || numberParts[0] == 8) {
      // in case the its is les than 70 or exactly 80
      result += this.units[numberParts[1]];
    } else if (numberParts[0] == 7 || numberParts[0] == 9) {
      // in case of 70 and 90, we make a shift by -10 to the tens rank and shift of +10 to unit rank
      // but only if the French type is "fr"
      result =
        this.tens[this.french][
          parseInt(`${numberParts[0] - (this.french === "fr" ? 1 : 0)}0`, 10)
        ] + "-";
      if (
        (numberParts[0] == 7 || this.french === "be") &&
        numberParts[1] == 1
      ) {
        // 71
        result += "et-";
      }
      result += this.tensConverter(
        numberParts[1] + (this.french === "fr" ? 10 : 0)
      );
    }
    return result;
  }

  /**
   * Due to the rules of French language, we convert the hundreds part and the tens part seperately
   * @param  {[number]} n the number we want to convert to a word
   * @return {[string]}    number being converted to a word
   */
  hundredsConverter(n: number | null = null): string {
    let result = "";
    const num = n ?? this.number;
    // calculate how many hundreds do we have in this number
    const hundreds = Math.floor(num / 100);
    // calculate the tens part of the number
    const rest = num % 100;
    if (hundreds == 0) {
      // ex: we are converting the 12 in 12345
      // no need to worry about the cent unit, just convert the 12
      result = this.tensConverter(rest);
    } else {
      // here, we are converting a group of 3 digits
      result = "cent";
      if (hundreds > 1) {
        result =
          this.tensConverter(hundreds) + "-" + result + (rest > 0 ? "" : "s");
      }

      // get the rest (in case we have it)
      if (rest > 0) {
        const restAsWord = this.tensConverter(rest);
        if (restAsWord) {
          // if (rest == 1) {
          //   result += "-et";
          // }
          result += "-" + restAsWord;
        }
      }
    }
    return result;
  }
  /**
   * Due to the rules of French language, we convert the hundreds part and the tens part seperately
   * @param  {[number]} groupIndex which group are we converting so we know the unit (nothing, mille, million etc)
   * @return {[string]}    unit of a number (nothing, mille, million etc)
   */
  getGroupNameByIndex(groupIndex: number): string {
    // assume we have a number that is larger than 1 and has unit
    let suffix: "single" | "plural" = "plural";
    const actualIndex = (this.numberParts.length - (groupIndex + 1)) as number;

    // parseInt(this.numberParts) == 1 WTF is this condition?
    if (this.numberParts[groupIndex] === 1) {
      // remove the unit if it is 1
      suffix = "single";
    } else {
      // only for thousands, remove the unit if the unit is not the last word (other groups has a value greater than 0)
      if (this.groups[actualIndex]["single"] === "mille") {
        for (let x = groupIndex + 1; x < this.numberParts.length; x++) {
          if (this.numberParts[x] > 0) {
            suffix = "single";
          }
        }
      }
    }
    /*
    get the proper unit, switch the order of array because units are ordered in ASC 
    but we are converting the number groups in DESC order
    */
    let g: string = this.groups[actualIndex][suffix];
    return g;
  }
}

export default FrenchNumbersToWords;
