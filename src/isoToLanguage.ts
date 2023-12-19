import { format } from './format'
import { isValidCountry, isValidLanguage } from './validation'
import { isoTL } from './iso'
import { getAsKey, getKeyValue } from './asKeys'
import { getAll } from './getAll'
import { getAllLanguageCodesByISO, getAllLanguagesByISO } from './getAllBy'
import { getCountriesByISO, getCountriesByLanguage, getLanguagesByISO } from './getBy'
import { getCountry, getCountryData } from './getCountry'
import { getLanguage, getLanguageData } from './getLanguage'

globalThis.format = format;
globalThis.getAll = getAll;
globalThis.getAllLanguageCodesByISO = getAllLanguageCodesByISO;
globalThis.getAllLanguagesByISO = getAllLanguagesByISO;
globalThis.getCountriesByISO = getCountriesByISO;
globalThis.getCountriesByLanguage = getCountriesByLanguage;
globalThis.getCountry = getCountry;
globalThis.getCountryData = getCountryData;
globalThis.getLanguage = getLanguage;
globalThis.getLanguageData = getLanguageData;
globalThis.getLanguagesByISO = getLanguagesByISO;
globalThis.getAsKey = getAsKey;
globalThis.getKeyValue = getKeyValue;
globalThis.isoTL = isoTL;
globalThis.isValidCountry = isValidCountry;
globalThis.isValidLanguage = isValidLanguage;
