
# French numbers to words converter

This package converts numbers to their written forms in French language

### Installation

```bash
  npm install french-numbers-to-words
```

### Usage

```javascript
  const myNumber = new FrenchNumbersToWords(12345, 'fr').result
  // The result is an object like this
  {
    parts: [
      { number: 12, text: 'douze', unit: 'mille' },
      { number: 345, text: 'trois-cent-quarante-cinq', unit: '' }
    ],
    fullText: 'douze-mille trois-cent-quarante-cinq'
  }
```

### Rules

#### **The units**
less than 16 follow no rules but each has a specific name."zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"(from 0 to 16)

#### **The tens**

as French up to 60, or using Belgium-French (septante, huitante, nonante), up to 90, follow the same pattern :
  - "dix", 
  - "vingt", 
  - "trente", 
  - "quarante", 
  - "cinquante", 
  - "soixante", 
  - "septante", 
  - "huitante", 
  - "nonante"(from 10 to 90)"huitante" could also be "octante".
  In French from France, the pattern change at 70:
  - 70 = 60 + 10 = "soixante-dix"
  - 80 = 4 * 20 = "quatre-vingts"
  - 90 = 4 * 20 + 10 = "quatre-vingt-dix"

#### **Numbers from 22 to 29, then 32 to 39 ...**
The rule is easy:
  - 22 = 20 + 2 = "vingt-deux", 
with a dash in between From 17 to 19, it follows this rule 
  - 17 = 10 + 7 = "dix-sept"
#### **Numbers ending with 1:**
The rule is the same as above, but with "-et-" which means "and" instead of "-":
  - 21 = "vingt-et-un"
Before 1990, the writing was "vingt et un" but since [the 1990 simplification reform](https://fr.wiktionary.org/wiki/Annexe:Rectifications_orthographiques_du_fran%C3%A7ais_en_1990#Num%C3%A9raux_compos%C3%A9s), all words used for numbers are joined-up with dashes.

#### **Numbers after 70 and 90**
 - 74 = 60 + 14 = "soixante-quatorze"
 -  77 = 60 + 17 = 60 + 10 + 7 = "soixante-dix-sept"
 -  95 = 4   * 20 + 15 = "quatre-vingt-quinze"
 -  99 = 4 * 20 + 10 + 9 = "quatre-vingt-dix-neuf"

#### **plurals of "quatre-vingt":**
  - 80 : 4 * 20 = "quatre-vingts" → means 4 times 20 so 20 is plural, thus "vingts" ends with an "s". 
But when it is not the ending of the word, the plural form disappear:
  - 82 = 4 * 4 +2 =  "quatre-vingt-deux", without an "s" at "vingt".

#### **71, 81, 91**

For some unknown reasons, 71 use an "-et-", 81 and 91 use a dash.
  - 71 = 60 + 11 = "soixante-et-onze"
  - 81 = 4 * 20 + 1 = "quatre-vingt-un"
  - 91 = 4 * 20 + 11 = "quatre-vingt-onze"


#### **100 and more**

One hundred is "cent". 
One thousand is "mille". 
The rule is joining this and the rest with a dash:
- 130 = 100 + 30 = "cent-trente"
- 1110 = 1000 + 1000 + 10 = "mille-cent-dix"

#### **plurals of "cent" and "mille:**
Like 80, 100 and 1000 can be plural if it ends a word and then takes an S: "cents", "milles"
  - 200 = 2 * 100 = "deux-cents"
  - 3 000 = 3 * 1000 = "trois-milles"

When "cent" or "mille" is not ending the word, then it is not plural:
  - 252 = 2 * 100 + 52 = "deux-cent-cinquante-deux"
  - 2045 = 2 * 1000 + 45 = "deux-mille-quarante-cinq" 
  - 200000 = 2 * 100 * 1000 = "deux-cent-milles", without S at "cents", but with S at "milles"
  - 180000 = (100 + 4 * 20) * 1000 = "cent-quatre-vingt-milles", without S at "vingt", but with S at "milles"

#### **Examples**
- 0:  zéro
- 1:  un
- 5:  cinq
- 10:  dix
- 11:  onze
- 15:  quinze
- 17:  dix-sept
- 20:  vingt
- 21:  vingt-et-un
- 30:  trente
- 35:  trente-cinq
- 50:  cinquante
- 51:  cinquante-et-un
- 68:  soixante-huit
- 70:  soixante-dix
- 71:  soixante-et-onze
- 74:  soixante-quatorze
- 75:  soixante-quinze
- 77:  soixante-dix-sept
- 80:  quatre-vingts
- 81:  quatre-vingt-un
- 82:  quatre-vingt-deux
- 91:  quatre-vingt-onze
- 99:  quatre-vingt-dix-neuf
- 100:  cent
- 101:  cent-et-un
- 105:  cent-cinq
- 111:  cent-onze
- 123:  cent-vingt-trois
- 130:  cent-trente
- 168:  cent-soixante-huit
- 171:  cent-soixante-et-onze
- 175:  cent-soixante-quinze
- 199:  cent-quatre-vingt-dix-neuf
- 200:  deux-cents
- 201:  deux-cent-et-un
- 555:  cinq-cent-cinquante-cinq
- 999:  neuf-cent-quatre-vingt-dix-neuf
- 1000:  mille 
- 1001:  mille-et-un
- 1111:  mille cent-onze
- 1199:  mille cent-quatre-vingt-dix-neuf
- 1234:  mille deux-cent-trente-quatre
- 1999:  mille neuf-cent-quatre-vingt-dix-neuf
- 2000:  deux-milles 
- 2001:  deux-mille-et-un
- 2020:  deux-mille vingt
- 2021:  deux-mille vingt-et-un
- 2345:  deux-mille trois-cent-quarante-cinq
- 3000:  trois-milles 
- 9999:  neuf-mille neuf-cent-quatre-vingt-dix-neuf
- 10000:  dix-milles 
- 11111:  onze-mille cent-onze
- 12345:  douze-mille trois-cent-quarante-cinq
- 123456:  cent-vingt-trois-mille quatre-cent-cinquante-six
- 200000:  deux-cent-milles 
- 654321:  six-cent-cinquante-quatre-mille trois-cent-vingt-et-un
- 999999:  neuf-cent-quatre-vingt-dix-neuf-mille neuf-cent-quatre-vingt-dix-neuf