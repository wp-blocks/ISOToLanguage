import type { Country, CountryData, ISOCode } from './types'

import { getIso } from './iso'
import { isoCountries } from './countries'

/**
 * This function retrieves country data by its name.
 *
 * @param {string} name - The name of the country to fetch data for.
 * @return {CountryData} Returns country data for the given name
 * or null if no matching country is found.
 */
export function getCountry(name: string): CountryData | false {
    for (const iso in isoCountries) {
        const isoData = isoCountries[iso as ISOCode]

        if (isoData.name === name || isoData.original === name) {
            return { ...isoData, code: iso as ISOCode }
        }
    }

    return false
}

/**
 * Get country data by a given a locale isoFormat (e.g. "en_US") or a language code (e.g. "en-US").
 *
 * @param {string} countryCode - A language code in the form of "Locale_Format"
 * @return {Country | false} Returns CountryData if a match is found, null otherwise
 */
export function getCountryData(countryCode: string): Country | false {
    let iso: string = ''
    // check if the languageCode has 2 characters
    if (countryCode.length === 2) {
        iso = countryCode
    } else if (countryCode.length === 5) {
        // get the country code from the language code or locale
        iso = countryCode.substring(3, 5)
    } else {
        return false
    }

    // Check if the iso code is valid
    return getIso(iso)
}
