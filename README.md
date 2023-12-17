# ISO To Language

Unlock the power of ISO codes with our lightweight and high-performance ISO-to-language converter module. This meticulously crafted package seamlessly transforms ISO country and language codes into meaningful country names, ensuring you
have all the essentials without unnecessary bloat.

## Key Features:

- **🚀 Performance-Driven:** Engineered with speed in mind, the package boasts swift execution for seamless integration into your projects.

- **📦 Minimal Footprint:** Weighing in at only 5.6kb gzipped, no dependencies, it keeps your project light without compromising on functionality.

- **🎯 Focused Functionality:** From validating ISO codes to formatting languages and countries, our module provides a suite of versatile utility functions for your language-related tasks.

- **📒 Well-Defined Types:** Utilizes TypeScript for well-documented and type-safe development.

- **✅ Tested:** Comprehensive Jest tests with 100% coverage to ensure reliability.

## Installation

Install the module using npm:

```bash
npm install ISOToLanguage
```

## Usage

Import the module:

```javascript
const ITL = require('ISOToLanguage');
console.log(ITL.getAll());
```

ESM import:

```javascript
import ITL from 'ISOToLanguage';
// or
import { getCountry, getAll } from 'ISOToLanguage';
```

## Usage

1. **[isValidIso](#isValidIso)**
    - Validates ISO codes for languages and countries.

2. **[format](#format)**
    - Formats language and country into a single string.

3. **[getCountryData](#getCountryData)**
    - Retrieves country data by locale format or language code.

4. **[ISO](#ISO)**
    - Retrieves data by ISO code and a specific type.

5. **[getCountry](#getCountry)**
    - Retrieves country data by name.

6. **[getcountriesbylanguage](#getcountriesbylanguage)**
    - Returns countries that speak any of the given languages.

7. **[getaskey](#getaskey)**
    - Generates a new object with keys derived from specified fields.

8. **[getKeyValue](#getKeyValue)**
    - Generates an array with the given key value combination.

9. **[getAll](#getAll)**
    - Retrieves data based on a specified type.

10. **[getCountriesByISO](#getCountriesByISO)**
    - Get the country data from the given array of ISO codes.

11. **[getAllLanguagesByISO](#getAllLanguagesByISO)**
    - Retrieves all languages associated with an array of ISO codes.

12. **[getAllLanguageCodesByISO](#getAllLanguageCodesByISO)**
    - Retrieves all language codes associated with an array of ISO codes.

## `isValidIso`

A function that checks if the provided ISO code is valid.

**Args**: `{"iso": "EN"}`

```javascript
const enIsValid = isValidIso('EN');
console.log(enIsValid); // false

const gbIsValid = isValidIso('GB');
console.log(gbIsValid); // true
```

## `format`

A function that formats the language and country into a single string.

**Args**: `{ "arg1": "language", "arg2?": "iso", "arg3?": {"type": IsoDataType, "separator": string } }`

```javascript
const result = format('en', 'us');
console.log(result); // en_US
```

```javascript
const result = format('en', 'US', { separator: '-' });
console.log(result); // en-US
```

```javascript
const result = format('en', 'US', { type: 'language-code' });
console.log(result); // en-US
```

```javascript
const result = format('en', 'US', { type: 'locale' });
console.log(result); // en_US
```

## `ISO`

A function that returns the ISO data for a given ISO code.

**Args**: `{ "iso": ISO, "type?": IsoDataType }`

```javascript
const isoData = ISO('US');
console.log(isoData);

/*
{
  "languages": ["en"],
  "name": "United States",
  "original": "United States"
}
*/
```
```javascript
const languages = ISO('BE', 'languages');
console.log(languages);

/*
["nl", "fr", "de"]
*/
```

## `getCountry`

Get country data by a given the country name (e.g. "Italy") or country original name (e.g. "Italia")

**Args**: `{ "name" : string }`

```javascript
const data = getCountry('Italia');
console.log(data);

/*
{
  "languages": [ "it" ],
  "name": "Italy",
  "original": "Italia",
  "code": "IT"
}
*/
```

## `getCountryData`

Get country data by a given locale format (e.g., "en_US").

**Args**: `{ "languageCode": string }`

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

## `getCountriesByLanguage`

Get all the countries that speak the given languages

**Args**: `{ "languages": [Array of ISO] }`

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

## `getAsKey`

Returns the iso countries list using as a key the given field.
Using the language as "key" will return an array of languages for each country

**Args**: `{ "field": IsoDataType }`

```javascript
const dataAsKey = getAsKey('languages');
console.log(dataAsKey);

/*
{
  "ca": {
    "languages": [
      "ca"
    ],
    "name": "Andorra",
    "original": "Andorra",
    "code": "AD"
  },
  "ar": {
    "languages": [
      "ar"
    ],
    "name": "Yemen",
(...)
*/
```
```javascript
const dataAsKeyOriginal = getAsKey('original');
console.log(dataAsKeyOriginal);

/*
{
  "Andorra": {
    "languages": [
      "ca"
    ],
    "name": "Andorra",
    "original": "Andorra",
    "code": "AD"
  },
  "دولة الإمارات العربية المتحدة": {
    "languages": [
      "ar"
    ],
*/
```

## `getKeyValue`

Returns an Array with the combination of the given key / value

**Args**: `{ "key" : IsoDataType, "value" : IsoDataType }`

```javascript
const dataAsKey = getKeyValue('language', 'original');
console.log(dataAsKey);

/*
[
    {"value":"ca","label":"Andorra"},
    {"value":"ar","label":"دولة الإمارات العربية المتحدة"},
    {"value":"ps","label":"افغانستان"},
    {"value":"uz","label":"افغانستان"},
    {"value":"tk","label":"افغانستان"}
(...)
*/
```

## `getAll`

Get all data for all countries, accept the type 'iso' | 'languages' | 'name' | 'original' | 'language-code' | 'locale'

**Args**: `{ "type?": IsoDataType }`

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
```javascript
const isoArray = getAll('iso');
console.log(isoArray);

/*
  ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", ...]
*/
```
```javascript
const languageCodesArray = getAll('language-codes');
console.log(languageCodesArray);

/*
  ["ca-AD", "ar-AE", "ps-AF", "uz-AF", "tk-AF", "en-AG", "en-AI", "sq-AL", "hy-AM", "ru-AM", "pt-AO", "es-AR", "gn-AR", "en-AS", ...]
*/
```

## `getCountriesByISO`

Get the country data from the given array of ISO codes

**Args**: `{ "isos": [Array of ISO] }`

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
 (...)
*/
```

## `getAllLanguagesByISO`

Get the languages from the given array of countries

**Args**: `{ "isos": [Array of ISO] }`

```javascript
const languagesByISO = getAllLanguagesByISO(['CD', 'ES', 'FR']);
console.log(languagesByISO);

/*
  ["fr", "ln", "kg", "sw", "lu", "es", "eu", "ca", "gl", "oc"]
*/
```

## `getAllLanguageCodesByISO`

Return an array of language code for the given array of ISO codes

**Args**: `{ "isos": [Array of ISO], "type?": 'locale' | 'language-code' }`

```javascript
const languageCodesByISO = getAllLanguageCodesByISO(['US', 'IT', 'ES']);
console.log(languageCodesByISO);

/*
  ["en-US","it-IT","es-ES","eu-ES","ca-ES","gl-ES","oc-ES"]
*/
```

## A brief recap

### ISO Country Code

ISO 3166-1-alpha-2 is the standard for country codes. It defines two-letter codes that are unique to each country. For example, the country code for the United Kingdom is `UK`, the country code for France is `FR`, and the country code for
Spain is `ES`.

### Language Code

ISO 639 is the standard for language codes. It defines two-letter and three-letter codes that are unique to each language. For example, the two-letter language code for English is `en`, the two-letter language code for French is `fr`, and
the two-letter language code for Spanish is `es`.

## Locale Format

The locale format is a way of combining a language code and a country code to represent a specific linguistic and cultural context. There are two main locale formats:

### BCP 47 (IETF language tag):

The BCP 47 format separates the language code and country code with an underscore. For example, `en_US` represents English spoken in the United States, `fr_FR` represents French spoken in France, and `es_ES` represents Spanish spoken in
Spain.

### ISO 3166-1-alpha-2 or language code:

The ISO 3166-1-alpha-2 format uses the ISO 3166-1-alpha-2 country code instead of an underscore. For example, `en-US` represents English spoken in the United States, `fr-FR` represents French spoken in France, and `es-ES` represents Spanish
spoken in Spain.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
