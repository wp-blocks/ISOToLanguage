# ISOToLanguage

An ISO-to-language converter module that provides utility functions to work with ISO codes and language data. in 5.6kb gzipped!

## Features:
- 🚀 Fast Lookup - Quickly retrieve ISO data and language information for countries.
- 😎 Versatile - Provides functions for fetching ISO data, languages, names, and original names.
- 📒 Well-Defined Types - Utilizes TypeScript for well-documented and type-safe development.
- 📦 Lightweight - Compact module for ISO code and language-related tasks.
- ✅ Tested - Comprehensive Jest tests with 100% coverage to ensure reliability.
- 🪅 Easy to Use - Simple API for common use cases with detailed examples.
- 🌍 Global Compatibility - Works seamlessly with both browsers and Node.js environments.
- 📚 Extensive Documentation - A well-documented API with examples, demos, and code references.
- 🔄 Dynamic Data Access - Retrieve data based on ISO code, language code, or specific data type.
- 📊 Data Exploration - Functions to explore ISO data by ISO code, name, or original name.
- 🎯 Focused Functionality - Methods for specialized tasks, such as sorting and language code retrieval.


## Installation

Install the module using npm:

```bash
npm install ISOToLanguage
```

## A brief recap

### ISO Country Code
ISO 3166-1-alpha-2 is the standard for country codes. It defines two-letter codes that are unique to each country. For example, the country code for the United Kingdom is `UK`, the country code for France is `FR`, and the country code for Spain is `ES`.

### Language Code
ISO 639 is the standard for language codes. It defines two-letter and three-letter codes that are unique to each language. For example, the two-letter language code for English is `en`, the two-letter language code for French is `fr`, and the two-letter language code for Spanish is `es`.

## Locale Format
The locale format is a way of combining a language code and a country code to represent a specific linguistic and cultural context. There are two main locale formats:

### BCP 47 (IETF language tag):

The BCP 47 format separates the language code and country code with an underscore. For example, `en_US` represents English spoken in the United States, `fr_FR` represents French spoken in France, and `es_ES` represents Spanish spoken in Spain.

### ISO 3166-1-alpha-2 or language code:

The ISO 3166-1-alpha-2 format uses the ISO 3166-1-alpha-2 country code instead of an underscore. For example, `en-US` represents English spoken in the United States, `fr-FR` represents French spoken in France, and `es-ES` represents Spanish spoken in Spain.

# ISO Language-Country Codes

This module provides utility functions for working with ISO language-country codes. It includes functions for formatting, retrieving data, and checking the validity of ISO codes.


## Usage

Import the module:

```javascript
const isoCodes = require('iso-language-country-codes');
```

## Usage

### Function: `isValidIso`

A function that checks if the provided ISO code is valid.

#### Example:

```javascript
const isValid = isValidIso('EN');
console.log(isValid); // false
```

#### Args:

```json
{
  "iso": "EN"
}
```

### Function: `format`

A function that formats the language and country into a single string.

#### Example:

```javascript
const result = format('en', 'us');
console.log(result); // en_US
```

#### Args:

```json
{
  "language": "en",
  "country": "us"
}
```

### Function: `format` with custom separator

Passing a third argument with a custom separator.

#### Example:

```javascript
const result = format('en', 'US', { separator: '-' });
console.log(result); // en-US
```

#### Args:

```json
{
  "language": "en",
  "iso": "US",
  "options": {
    "separator": "-"
  }
}
```

### Function: `format` with type 'language-code'

Passing a third argument with the type 'language-code'.

#### Example:

```javascript
const result = format('en', 'US', { type: 'language-code' });
console.log(result); // en-US
```

#### Args:

```json
{
  "language": "en",
  "iso": "US",
  "options": {
    "type": "language-code"
  }
}
```

### Function: `format` with type 'locale'

Passing a third argument with the type 'locale'.

#### Example:

```javascript
const result = format('en', 'US', { type: 'locale' });
console.log(result); // en_US
```

#### Args:

```json
{
  "language": "en",
  "iso": "US",
  "options": {
    "type": "locale"
  }
}
```

### Function: `getCountryData`

Get country data by a given locale format (e.g., "en_US").

#### Example:

```javascript
const data = getCountryData('de_BE');
console.log(data);

/*
{
  "languages": ["nl", "fr", "de"],
  "name": "Belgium",
  "original": "België"
}
*/
```

#### Args:

```json
{
  "languageCode": "de_BE"
}
```

### Function: `get`

A function that returns the ISO data for a given ISO code.

#### Example:

```javascript
const isoData = get('US');
console.log(isoData);

/*
{
  "languages": ["en"],
  "name": "United States",
  "original": "United States"
}
*/
```

#### Args:

```json
{
  "iso": "US"
}
```

### Function: `get` with type 'languages'

Example:

```javascript
const languages = get('BE', 'languages');
console.log(languages);

/*
["nl", "fr", "de"]
*/
```

#### Args:

```json
{
  "arg1": "BE",
  "type": "languages"
}
```

### Function: `getAll`

Example:

```javascript
const allData = getAll();
console.log(allData);

/*
{
  "AD": {
    "languages": ["ca"],
    "name": "Andorra",
    "original": "Andorra"
  },
  "AE": {
    "languages": ["ar"],
    "name": "United Arab Emirates",
    "original": "دولة الإمارات العربية المتحدة"
  },
  ...
}
*/
```

#### Args:

```json
{}
```

### Function: `getAll` with type 'iso'

Example:

```javascript
const isoArray = getAll('iso');
console.log(isoArray);

/*
["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", ...]
*/
```

#### Args:

```json
{
  "type": "iso"
}
```

### Function: `getAll` with type 'language-codes'

Example:

```javascript
const languageCodesArray = getAll('language-codes');
console.log(languageCodesArray);

/*
["ca-AD", "ar-AE", "ps-AF", "uz-AF", "tk-AF", "en-AG", "en-AI", "sq-AL", "hy-AM", "ru-AM", "pt-AO", "es-AR", "gn-AR", "en-AS", ...]
*/
```

#### Args:

```json
{
  "type": "language-codes"
}
```

### Function: `getCountriesByISO`

Example:

```javascript
const countriesData = getCountriesByISO(['US', 'IT', 'GB', 'FR']);
console.log(countriesData);

/*
{
  "US": {
    "languages": ["en"],
    "name": "United States",
    "original": "United States"
  },
  "IT": {
    "languages": ["it"],
    "name": "Italy",
    "original": "Italia"
  },
  ...
}
*/
```

#### Args:

```json
{
  "isos": ["US", "IT", "GB", "FR"]
}
```

### Function: `getAllLanguagesByISO`

Example:

```javascript
const languagesByISO = getAllLanguagesByISO(['CD', 'ES', 'FR']);
console.log(languagesByISO);

/*
["fr", "ln", "kg", "sw", "lu", "es", "eu", "ca", "gl", "oc"]
*/
```

#### Args:

```json
{
  "isos

": ["CD", "ES", "FR"]
}
```

### Function: `getAllLanguageCodesByISO`

Example:

```javascript
const languageCodesByISO = getAllLanguageCodesByISO(['US', 'IT', 'GB', 'FR']);
console.log(languageCodesByISO);

/*
["en-US", "it-IT", "en-GB", "fr-FR"]
*/
```

#### Args:

```json
{
  "isos": ["US", "IT", "GB", "FR"]
}
```

### Function: `getCountriesByLanguage`

Example:

```javascript
const countriesByLanguage = getCountriesByLanguage(['gb', 'fr']);
console.log(countriesByLanguage);

/*
{
  "BE": {
    "languages": ["nl", "fr", "de"],
    "name": "Belgium",
    "original": "België"
  },
  "BF": {
    "languages": ["fr", "ff"],
    ...
}
*/
```

#### Args:

```json
{
  "languages": ["gb", "fr"]
}
```

### Function: `getAsKey`

Example:

```javascript
const dataAsKey = getAsKey('languages');
console.log(dataAsKey);

/*
{
  "ca": {
    "languages": ["es", "eu", "ca", "gl", "oc"],
    "name": "Spain",
    "original": "España",
    "code": "ES"
  },
  "ar": {
    "languages": [...],
    ...
  }
}
*/
```

#### Args:

```json
{
  "field": "languages"
}
```

### Function: `getAsKey` with field 'original'

Example:

```javascript
const dataAsKeyOriginal = getAsKey('original');
console.log(dataAsKeyOriginal);

/*
{
  "Andorra": {
    "languages": ["ca"],
    "name": "Andorra",
    "original": "Andorra",
    "code": "AD"
  },
  "دولة الإمارات العربية المتحدة": {
    "languages": ["ar"],
    ...
  }
}
*/
```

#### Args:

```json
{
  "field": "original"
}
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
