# French numbers to words converter

This package converts numbers to their written forms in French language

### Installation

```bash
  npm install french-numbers-to-words
```

### Usage

```javascript
  const numberToWords = new FrenchNumbersToWords('fr'); // fr OR be
  numberToWords.conver(12345)
  // The result is an object like this
  {
    parts: [
      { number: 12, text: 'douze', unit: 'mille' },
      { number: 345, text: 'trois-cent-quarante-cinq', unit: '' }
    ],
    fullText: 'douze-mille-trois-cent-quarante-cinq'
  }
```
