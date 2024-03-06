# ISO To Language

<div>
  <a href="https://www.npmjs.com/package/isotolanguage">
    <img alt="version" src="https://img.shields.io/npm/v/isotolanguage.svg?label=npm%20version" />
  </a>
  <a href="https://github.com/wp-blocks/isotolanguage/blob/master/LICENSE">
    <img alt="version" src="https://img.shields.io/npm/l/isotolanguage" />
  </a>
  <a href="https://github.com/wp-blocks/ISOToLanguage/actions">
    <img alt="build" src="https://img.shields.io/github/actions/workflow/status/wp-blocks/ISOToLanguage/pnpm.yml" />
  </a>
  <a href="https://github.com/wp-blocks/ISOToLanguage/actions">
    <img alt="workflows" src="https://github.com/wp-blocks/ISOToLanguage/actions/workflows/pnpm.yml/badge.svg" />
  </a>
</div>

Unlock the power of ISO codes with our lightweight and high-performance ISO-to-language converter module. This meticulously crafted package seamlessly transforms ISO country and language codes into meaningful country names, ensuring you
have all the essentials without unnecessary bloat.

Get information for each iso code, our dataset is one of the most complete we have original and international name, iso2 and 3, flags, tld, currency, dial, continent, sub-region and more take a look below, you will be amazed at the amount of data available


## Key Features:

- **🚀 Performance-Driven:** Engineered with speed in mind, the package boasts swift execution for seamless integration into your projects.

- **📦 Minimal Footprint:** Weighing less than 40kb gzipped, no dependencies, it keeps your project light without compromising on functionality.

- **🎯 Focused Functionality:** From validating ISO codes to formatting languages and countries, our module provides a suite of versatile utility functions for your language-related tasks.

- **📒 Well-Defined Types:** Utilizes TypeScript for well-documented and type-safe development.

- **✅ Tested:** Comprehensive Jest tests with 100% coverage to ensure reliability.

# Usage

### As a browser script

Browser:

```html
<head>
<script src="https://cdn.jsdelivr.net/npm/isotolanguage@1.0.1/lib/browser/isoToLanguage.js"></script>
</head>
<div id="lang"></div>
<script>document.querySelector('#lang').innerHTML = JSON.stringify(isoToLanguage.getAll())</script>
```

Umd:

```html
<script src="./node_modules/isoToLanguage/lib/umd/isoToLanguage.js"></script>
<script>document.querySelector('#lang').innerHTML = JSON.stringify(isoToLanguage.getAll())</script>
```


### As Module

#### Installation

Install the module using npm:

```bash
npm install ISOToLanguage
```

Common JS (require):

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

## Functions

1. **[validateISO](#validateISO)**
   Validates ISO codes for countries.

2. **[isoInfo](#isoInfo)**
   Decrypts an iso code of type language, country, local, or language-code

3. **[formatIso](#isoFormat)**
    Formats language and country into a single string.

4. **[getIso](#getIso)**
    Retrieves data by ISO code and a specific type.

5. **[getAll](#getAll)**
   Retrieves data based on a specified type.

6. **[getGroupedBy](#getGroupedBy)**
   Builds an object of country data grouped by a custom field

7. **[getKeyValue](#getKeyValue)**
   Generates an array with the given key value combination.

8. **[getCountriesByLanguage](#getCountriesByLanguage)**
   Returns countries that speak any of the given languages.

9. **[getByProximity](#getByProximity)**
   Retrieves a list of countries within a specified proximity of the given country.

---

## `isoInfo`

A function that formats the language and country into a single string.

**Args**: `{ "codeType": "language-iso2" | "language-iso3" | "country-iso" | "locale" | "language-code" }`

```javascript
const result = isoInfo('it');
console.log(result); // { "name": "Italian", "original": "Italiano", "iso3": "ita", "iso2": "it" }
```

```javascript
const result = isoInfo('IT');
console.log(result); // { "iso2": "IT", "languages": [ "it" ], "name": "Italy", "original": "Italia", "iso3": "ITA" }
```

```javascript
const result = isoInfo('ITA');
console.log(result); // { "languages": [ "it" ], "name": "Italy", "original": "Italia", "iso3": "ITA" }
```

```javascript
const result = isoInfo('it_IT');
console.log(result); // { "type": "locale", "country": {...}, "language": {...} }
```

```javascript
const result = isoInfo('it-IT');
console.log(result); // { "type": "language-code", "country": {...}, "language": {...} }
```


## `formatIso`

A function that formats the language and country into a single string.

**Args**: `{ "arg1": "language", "arg2?": "iso", "arg3?": {"type": IsoDataType, "separator": string } }`

```javascript
const result = formatIso('en', 'us');
console.log(result); // en_US
```

```javascript
const result = formatIso('en', 'US', { separator: '-' });
console.log(result); // en-US
```

```javascript
const result = formatIso('en', 'US', { type: 'language-code' });
console.log(result); // en-US
```

```javascript
const result = formatIso('en', 'US', { type: 'locale' });
console.log(result); // en_US
```

## `getIso`

Returns the information about the iso code

**Args**: `{ "key": iso2 | iso3 | country | country name | original country name, "type?": country | language, "field": [arrayOfFields] }`

```javascript
const isoArray = getIso('GB');
console.log(isoArray);

/*
  { "iso2": "GB", "languages": [ "en" ], "name": "United Kingdom", "original": "United Kingdom", "iso3": "GBR" }
*/
```
```javascript
const isoArray = getIso('Italiano', 'language');
console.log(isoArray);

/*
  { "name": "Italian", "original": "Italiano", "iso3": "ita", "iso2": "it" }
*/
```
```javascript
const isoArray = getIso('Italiano', 'language', 'iso2');
console.log(isoArray);

/* it */
```
```javascript
const isoArray = getIso('Italia', 'country', 'flag');
console.log(isoArray);

/* https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg */
```
```javascript
const isoArray = getIso('Tunisia', "country", ['capital', 'currency']);
console.log(isoArray);

/*
{
  "capital": "Tunis",
  "currency": {
    "code": "TND",
    "symbol": "DT",
    "original": "د.ت.‏",
    "name": "Tunisian Dinar"
  }
}
*/
```
```javascript
const isoArray = getIso('Spain', undefined, ['name', 'locale', 'language-code']);
console.log(isoArray);

/*
{
  "name": "Spain",
  "locale": [
    "es_ES",
    "eu_ES",
    "ca_ES",
    "gl_ES",
    "oc_ES"
  ],
  "language-code": [
    "es-ES",
    "eu-ES",
    "ca-ES",
    "gl-ES",
    "oc-ES"
  ]
}
*/
```



## `getAll`

Get all data for all countries, accept the type 'iso' | 'languages' | 'name' | 'original' | 'language-code' | 'language-name' | 'language-original' | 'locale'

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


## `getGroupedBy`

You can group the results by continent or region or subRegion. Pass a second argument to filter by that term.

**Args**: `{ "type?": "continent" | "region" | "subRegion" }`

```javascript
const allData = getGroupedBy( 'continent' );
console.log(allData);
/*
{
  "EU": {
    "AX": {
      "name": "Aland",
      (...)
    },
    "AL": {
      "name": "Albania",
      (...)
    },
    (...)
  },
  "AN": {
    "AQ": {
      "name": "Antarctica",
  (...)
}
*/
```
```javascript
const allData = getGroupedBy( 'continent', 'Antarctica' );
console.log(allData);
/*
{
  "Antarctica": {
    "AQ": {
      "languages": [],
      "name": "Antarctica",
      "original": "Antarctica",
      "iso3": "ATA",
      "region": "Antarctica",
      "continent": "AN",
      "subRegion": "Antarctica"
    }
  }
}
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
  {
    "label": "ca_AD",
    "value": "Andorra"
  },
  {
    "label": "ar_AE",
    "value": "دولة الإمارات العربية المتحدة"
  },
  {
    "label": "ps_AF",
    "value": "افغانستان (ps_AF)"
  },
  {
    "label": "uz_AF",
    "value": "افغانستان (uz_AF)"
  },
  {
    "label": "tk_AF",
    "value": "افغانستان (tk_AF)"
  },
(...)
*/
```

```javascript
const data = getKeyValue( 'locale', 'flag', "the language locale", "flag" );
console.log(data);

/*
[
  {
    "the language locale": "ca_AD",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg"
  },
  {
    "the language locale": "ar_AE",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
  },
  {
    "the language locale": "ps_AF",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg (ps_AF)"
  },
(...)
*/
```

## `getCountriesByLanguage`

Returns all the countries of the specified languages

**Args**: `{ "languages" : [arrayOfLanguages] }`

```javascript
const dataAsKey = getCountriesByLanguage(['it', 'es']);
console.log(dataAsKey);
/*
{
  "AR": {
    "languages": [
      "es",
      "gn"
    ],
    "name": "Argentina",
    "original": "Argentina",
    "iso3": "ARG"
  },
  (...)
  "CH": {
    "languages": [
      "de",
      "fr",
      "it"
    ],
    "name": "Switzerland",
    "original": "Schweiz",
    "iso3": "CHE"
  },
(...)
*/
```

## `getByProximity`

Retrieves a list of countries within a specified range from the center of the given country.

**Args**: `{ "languages" : [arrayOfLanguages] }`

```javascript
const dataAsKey = getByProximity('it', 1000);
console.log(dataAsKey);

/*
[
    { iso: 'IT', coordinates: [ 41.8719, 12.5674 ], distance: 0 },
    {
        iso: 'VA',
        coordinates: [ 41.9029, 12.4534 ],
        distance: 10.04676735128846
    },
    {
        iso: 'SM',
        coordinates: [ 43.9424, 12.4578 ],
        distance: 230.40201087435003
    },
    {
        iso: 'HR',
        coordinates: [ 45.1, 15.2 ],
        distance: 417.01956518047405
    },
    {
        iso: 'MC',
        coordinates: [ 43.7503, 7.4128 ],
        distance: 469.37405276643517
    },
    {
        iso: 'BA',
        coordinates: [ 43.9159, 17.6791 ],
        distance: 474.2778009042667
    },
    {
        iso: 'SI',
        coordinates: [ 46.1512, 14.9955 ],
        distance: 513.8640413087771
    },
    {
        iso: 'ME',
        coordinates: [ 42.7087, 19.3744 ],
        distance: 567.4303782156377
    },
    {
        iso: 'LI',
        coordinates: [ 47.166, 9.5554 ],
        distance: 635.1401466708603
    },
    {
        iso: 'AL',
        coordinates: [ 41.1533, 20.1683 ],
        distance: 637.6883921375974
    },
    {
        iso: 'AT',
        coordinates: [ 47.5162, 14.5501 ],
        distance: 646.8280352835117
    },
    {
        iso: 'CH',
        coordinates: [ 46.8182, 8.2275 ],
        distance: 649.0693011095187
    },
    {
        iso: 'MT',
        coordinates: [ 35.9375, 14.3754 ],
        distance: 678.1192634942938
    },
    {
        iso: 'XK',
        coordinates: [ 42.6026, 20.903 ],
        distance: 690.7348154830586
    },
    {
        iso: 'RS',
        coordinates: [ 44.0165, 21.0059 ],
        distance: 726.6754233126602
    },
    {
        iso: 'MK',
        coordinates: [ 41.6086, 21.7453 ],
        distance: 761.6932798987688
    },
    {
        iso: 'HU',
        coordinates: [ 47.1625, 19.5033 ],
        distance: 804.6598779515814
    },
    {
        iso: 'GR',
        coordinates: [ 39.0742, 21.8243 ],
        distance: 841.9857682997398
    },
    {
        iso: 'AD',
        coordinates: [ 42.5462, 1.6016 ],
        distance: 905.6320231312061
    },
    {
        iso: 'CZ',
        coordinates: [ 49.8175, 15.473 ],
        distance: 911.5367886248189
    },
    {
        iso: 'TN',
        coordinates: [ 33.8869, 9.5375 ],
        distance: 926.6812884937063
    },
    {
        iso: 'SK',
        coordinates: [ 48.669, 19.699 ],
        distance: 938.6194450746992
    },
    {
        iso: 'FR',
        coordinates: [ 46.2276, 2.2137 ],
        distance: 957.6636949908722
    }
]
*/
```

## A brief recap

### ISO Country Code

ISO 3166-1-alpha-2 is the standard for country codes. It defines two-letter codes that are unique to each country. For example, the country code for the United Kingdom is `GB`, the country code for France is `FR`, and the country code for
Spain is `ES`.

### Language Code

ISO 639 is the standard for language codes. It defines two-letter and three-letter codes that are unique to each language. For example, the two-letter language code for English is `en`, the two-letter language code for French is `fr`, and
the two-letter language code for Spanish is `es`.

## Locale Format

The locale formatIso is a way of combining a language code and a country code to represent a specific linguistic and cultural context. There are two main locale formats:

### BCP 47 (IETF language tag):

The BCP 47 formatIso separates the language code and country code with an underscore. For example, `en_US` represents English spoken in the United States, `fr_FR` represents French spoken in France, and `es_ES` represents Spanish spoken in
Spain.

### ISO 3166-1-alpha-2 or language code:

The ISO 3166-1-alpha-2 formatIso uses the ISO 3166-1-alpha-2 country code instead of an underscore. For example, `en-US` represents English spoken in the United States, `fr-FR` represents French spoken in France, and `es-ES` represents Spanish
spoken in Spain.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
