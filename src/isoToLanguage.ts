import { isoFormat } from './isoFormat'
import { isValidCountry, isValidLanguage } from './validation'
import { isoTL } from './iso'
import { getAsKey, getKeyValue } from './asKeys'
import { getAll } from './getAll'
import { getAllLanguageCodesByISO, getAllLanguagesByISO } from './getAllBy'
import { getCountriesByISO, getCountriesByLanguage, getLanguagesByISO } from './getBy'
import { getCountry, getCountryData } from './getCountry'
import { getLanguage, getLanguageData } from './getLanguage'

const isoToLanguage: {
    isoFormat: typeof isoFormat,
    isValidCountry: typeof isValidCountry,
    isValidLanguage: typeof isValidLanguage,
    isoTL: typeof isoTL,
    getAsKey: typeof getAsKey,
    getKeyValue: typeof getKeyValue,
    getAll: typeof getAll,
    getAllLanguageCodesByISO: typeof getAllLanguageCodesByISO,
    getAllLanguagesByISO: typeof getAllLanguagesByISO,
    getCountriesByISO: typeof getCountriesByISO,
    getCountriesByLanguage: typeof getCountriesByLanguage,
    getLanguagesByISO: typeof getLanguagesByISO,
    getCountry: typeof getCountry,
    getCountryData: typeof getCountryData,
    getLanguage: typeof getLanguage,
    getLanguageData: typeof getLanguageData,
} = {
    isoFormat,
    isValidCountry,
    isValidLanguage,
    isoTL,
    getAsKey,
    getKeyValue,
    getAll,
    getAllLanguageCodesByISO,
    getAllLanguagesByISO,
    getCountriesByISO,
    getCountriesByLanguage,
    getLanguagesByISO,
    getCountry,
    getCountryData,
    getLanguage,
    getLanguageData,
}

globalThis.Object.assign( globalThis, isoToLanguage)

