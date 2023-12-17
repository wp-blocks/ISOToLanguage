# ISO To Language

Unlock the power of ISO codes with our lightweight and high-performance ISO-to-language converter module. This meticulously crafted package seamlessly transforms ISO country and language codes into meaningful country names, ensuring you have all the essentials without unnecessary bloat.

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

4. **[iso](#iso)**
   - Retrieves data by ISO code and a specific type.

5. **[getCountry](#getCountry)**
   - Retrieves country data by name.

6. **[getcountriesbylanguage](#getcountriesbylanguage)**
    - Returns countries that speak any of the given languages.

7. **[getaskey](#getaskey)**
   - Generates a new object with keys derived from specified fields.

8. **[getAll](#getAll)**
   - Retrieves data based on a specified type.

9. **[getCountriesByISO](#getCountriesByISO)**
    - Get the country data from the given array of ISO codes.

10. **[getAllLanguagesByISO](#getAllLanguagesByISO)**
     - Retrieves all languages associated with an array of ISO codes.

11. **[getAllLanguageCodesByISO](#getAllLanguageCodesByISO)**
     - Retrieves all language codes associated with an array of ISO codes.


## `isValidIso`

A function that checks if the provided ISO code is valid.

**Args**: `{"iso": "EN"}`

```javascript
const isValid = isValidIso('EN');
console.log(isValid); // false
```

## `format`

A function that formats the language and country into a single string.

**Args**: `{ "language": "en", "country": "us" }`

```javascript
const result = format('en', 'us');
console.log(result); // en_US
```

##### `format` with custom separator

**Args**: `{"language": "en", "iso": "US", "options": {"separator": "-"}}`

```javascript
const result = format('en', 'US', { separator: '-' });
console.log(result); // en-US
```

#### `format` with type 'language-code'

**Args**: `{"language": "en", "iso": "US", "options": {"type": "language-code"}}`

```javascript
const result = format('en', 'US', { type: 'language-code' });
console.log(result); // en-US
```

#### `format` with type 'locale'

**Args**: `{"language": "en", "iso": "US", "options": {"type": "locale"}}`

```javascript
const result = format('en', 'US', { type: 'locale' });
console.log(result); // en_US
```

## `getCountryData`

Get country data by a given locale format (e.g., "en_US").

**Args**: `{"languageCode": "de_BE"}`

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

## `iso`

A function that returns the ISO data for a given ISO code.

**Args**: `{"iso": "US"}`

```javascript
const isoData = iso('US');
console.log(isoData);

/*
{
  "languages": ["en"],
  "name": "United States",
  "original": "United States"
}
*/
```
**Args**: `{ "iso": "BE", "type": "languages" }`

```javascript
const languages = iso('BE', 'languages');
console.log(languages);

/*
["nl", "fr", "de"]
*/
```

## `getCountry`

Get country data by a given the country name (e.g. "Italy") or country original name (e.g. "Italia")

**Args**: `{"name":"Italia"}`

```javascript
const data = getCountry("Italia");
console.log(data);

/*
{
	"languages": [
		"it"
	],
	"name": "Italy",
	"original": "Italia",
	"code": "IT"
}
*/
```

## `getCountriesByLanguage`

**Args**: `{"languages": ["gb", "fr"]}`

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

**Args**: `{"field":"original"}`

```javascript
const dataAsKey = getAsKey('languages');
console.log(dataAsKey);

/*
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
		"name": "United Arab Emirates",
		"original": "دولة الإمارات العربية ال
(...)
*/
```

## `getAsKey`

**Args**: `{"field": "original"}`

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

## `getAll`

**Args**: `{}`


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
**Args**: `{"type": "iso"}`

```javascript
const isoArray = getAll('iso');
console.log(isoArray);

/*
["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", ...]
*/
```
**Args**: `{"type": "language-codes"}`

```javascript
const languageCodesArray = getAll('language-codes');
console.log(languageCodesArray);

/*
["ca-AD", "ar-AE", "ps-AF", "uz-AF", "tk-AF", "en-AG", "en-AI", "sq-AL", "hy-AM", "ru-AM", "pt-AO", "es-AR", "gn-AR", "en-AS", ...]
*/
```

## `getCountriesByISO`

**Args**: `{"isos": ["US", "IT", "GB", "FR"]}`

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

## `getAllLanguagesByISO`

**Args**: `{"isos ": ["CD", "ES", "FR"]}`

```javascript
const languagesByISO = getAllLanguagesByISO(['CD', 'ES', 'FR']);
console.log(languagesByISO);

/*
["fr", "ln", "kg", "sw", "lu", "es", "eu", "ca", "gl", "oc"]
*/
```

## `getAllLanguageCodesByISO`

**Args**: `{"isos": ["US", "IT", "GB", "FR"]}`

```javascript
const languageCodesByISO = getAllLanguageCodesByISO(['US', 'IT', 'GB', 'FR']);
console.log(languageCodesByISO);

/*
["en-US", "it-IT", "en-GB", "fr-FR"]
*/
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


## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
