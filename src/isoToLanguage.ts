import { isoFormat as format } from './isoFormat'
import { isValidCountry, isValidLanguage } from './validation'
import { isoTL } from './iso'
import { getAsKey, getKeyValue } from './asKeys'
import { getAll } from './getAll'
import { getAllLanguageCodesByISO, getAllLanguagesByISO } from './getAllBy'
import { getCountriesByISO, getCountriesByLanguage, getLanguagesByISO } from './getBy'
import { getCountry, getCountryData } from './getCountry'
import { getLanguage, getLanguageData } from './getLanguage'

globalThis.Object.assign( globalThis, {
    isoToLanguage: {
        format,
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
})

