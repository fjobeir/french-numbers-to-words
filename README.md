# French numbers to words converter

This package converts numbers to their written forms in French language. Version 1.0.0 introduces breaking changes, please update carefully.

### Installation

```bash
  npm install french-numbers-to-words
```

### Usage

```javascript
  import FrenchNumbersToWords from 'french-numbers-to-words';
  const numberToWords = new FrenchNumbersToWords('fr'); // 'fr' for French or 'be' for Belgian French
  numberToWords.convert(12345)
  // The result is an object like this
  {
    parts: [
      { number: 12, text: 'douze', unit: 'mille' },
      { number: 345, text: 'trois-cent-quarante-cinq', unit: '' }
    ],
    fullText: 'douze-mille-trois-cent-quarante-cinq'
  }
```
