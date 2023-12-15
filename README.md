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
npm install yourModule
```

## A brief recap
Locale name - en_US
language code ISO 639-1 - en-US
ISO - US


## Usage

```typescript
import ISOToLanguage, { CountryData, ISOCode } from 'ISOToLanguage';

const isoToLanguage = new ISOToLanguage();
```

```typescript
// Get all ISO codes
const allISOs: string[] = isoToLanguage.getAllISO();
console.log('All ISOs:', allISOs);
```

```typescript
// Get all available languages
const allLanguages: string[] = isoToLanguage.getAllLanguages();
console.log('All Languages:', allLanguages);
```

```typescript
// Get all country names
const allNames: string[] = isoToLanguage.getAllNames();
console.log('All Country Names:', allNames);
```

```typescript
// Get all original country names
const allOriginalNames: string[] = isoToLanguage.getAllOriginalNames();
console.log('All Original Country Names:', allOriginalNames);
```

```typescript
// Get ISO data for a specific ISO code
const isoData: CountryData | false = isoToLanguage.getByISO('US');
console.log('ISO Data for US:', isoData);
```

```typescript
// Fetch languages associated with a specific ISO code
const languagesForUS: string[] | false = isoToLanguage.getLanguagesByISO('US');
console.log('Languages for US:', languagesForUS);
```

```typescript
// Get the name associated with a specific ISO code
const nameForUS: string | false = isoToLanguage.getNameByISO('US');
console.log('Name for US:', nameForUS);
```

```typescript
// Get the original data associated with a specific ISO code
const originalForUS: string | false = isoToLanguage.getOriginalByISO('US');
console.log('Original data for US:', originalForUS);
```

```typescript
// Get ISO data by ISO code or string
const isoDataForUS: CountryData | false = isoToLanguage.getByISO('US');
console.log('ISO Data for US:', isoDataForUS);
```

```typescript
// Fetch ISO data by ISO code or string and a specific type
const languagesForUSByType: string[] | false = isoToLanguage.getByIso('US', 'languages');
console.log('Languages for US by type:', languagesForUSByType);
```

```typescript
// Retrieve ISO data as key-value pairs based on a specified field
const isoDataAsKey: Record<string, CountryData> = isoToLanguage.asKey('name');
console.log('ISO Data as Key:', isoDataAsKey);
```

```typescript
// Get country data by a given language code
const countryDataByLanguage: CountryData | null = isoToLanguage.getByLanguageCode('EN_US');
console.log('Country Data by Language Code:', countryDataByLanguage);
```

```typescript
// Retrieve data for a given list of ISO country codes
const countriesByISO: Record<string, CountryData> = isoToLanguage.getCountriesByISO(['US', 'CA']);
console.log('Countries by ISO:', countriesByISO);
```

## Additional Methods

### getAllLanguagesByISO

Retrieve all languages associated with the given array of ISO codes.

```typescript
const languagesForCountries: string[] = isoToLanguage.getAllLanguagesByISO(['US', 'CA']);
console.log('Languages for Countries:', languagesForCountries);
```

### getAllLanguageCodesByISO

Retrieve all language codes associated with the given array of ISO codes.

```typescript
const languageCodesForCountries: string[] = isoToLanguage.getAllLanguageCodesByISO(['US', 'CA']);
console.log('Language Codes for Countries:', languageCodesForCountries);
```

### getLanguagesForISOs

Retrieve all languages used given an array of ISO codes.

```typescript
const languagesForISOs: string[] = isoToLanguage.getLanguagesForISOs(['US', 'CA']);
console.log('Languages for ISOs:', languagesForISOs);
```

### getLanguageCodesForISOs

Retrieve all language codes for the given array of ISO codes.

```typescript
const languageCodesForISOs: string[] = isoToLanguage.getLanguageCodesForISOs(['US', 'CA']);
console.log('Language Codes for ISOs:', languageCodesForISOs);
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
