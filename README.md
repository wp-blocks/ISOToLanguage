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

### Formatting Language and Country

The `format` function combines a language code and a country code into a formatted string:

```javascript
const formattedCode = isoCodes.format('en', 'US');
console.log(formattedCode); // Output: 'en_US'
```

If the country code is not provided, the function attempts to use the language code as a fallback:

```javascript
const formattedFallback = isoCodes.format('en');
console.log(formattedFallback); // Output: 'en_US' (fallback to 'US')
```

### Getting Countries by Language

The `getCountriesByLanguage` function returns a list of countries that speak the given languages:

```javascript
const countriesByLanguage = isoCodes.getCountriesByLanguage(['en', 'fr']);
console.log(countriesByLanguage);
// Output: { US: { name: 'United States', original: 'United States', languages: ['en'] }, ... }
```

### Retrieving Data by ISO Code

The `getIso` function retrieves ISO data by ISO code:

```javascript
const isoData = isoCodes.getIso('US');
console.log(isoData);
// Output: { name: 'United States', original: 'United States', languages: ['en'], ... }
```

### Getting All ISO Codes

The `getAllISO` function returns an array of all available ISO codes:

```javascript
const allIsoCodes = isoCodes.getAllISO();
console.log(allIsoCodes); // Output: ['US', 'CA', ...]
```

### Additional Functions

- `getLanguages(iso: string, format?: 'locale' | 'language-code'): string[] | false`: Retrieves languages associated with the given ISO code.

- `getNameByISO(iso: string): string | false`: Returns the name associated with the given ISO code.

- `getOriginalNameByISO(iso: string): string | false`: Returns the original name associated with the given ISO code.

- `getAll(type?: 'iso' | 'languages' | 'names' | 'original' | 'language-codes' | 'locales'): string[] | typeof isoCodes.isoList`: Retrieves all ISO codes or other specified types.

- `getCountryData(languageCode: string): isoCodes.Country | false`: Gets country data by a given language code in the format "Locale_Format".

- `getCountriesByISO(isos: string[]): Record<string, isoCodes.Country>`: Retrieves data for countries associated with the given array of ISO codes.

- `getAllLanguagesByISO(isos: string[]): string[]`: Retrieves all languages associated with the given array of ISO codes.

- `getAllLanguageCodesByISO(isos: string[], type?: string): string[]`: Retrieves all language codes associated with the given array of ISO codes.

- `getCountry(name: string): isoCodes.CountryData | false`: Retrieves country data by its name (official and original e.g. "Italy" and "Itelia").


## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
