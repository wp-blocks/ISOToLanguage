import { isoList } from './iso'
import {Country, CountryData, ISOCode, ISOData} from './type'

/**
 * An ISO-to-language converter.
 *
 * @class ISOToLanguage
 */
export default class ISOToLanguage {
    /**
     * Formats the language and country into a single string.
     *
     * @param language - The language code.
     * @param country - The country code. Defaults to the same value as `language`.
     * @param options - Optional parameters.
     * @param options.separator - The separator used to join the language and country code. Defaults to '_'.
     * @returns The formatted string combining the language and country code.
     */
    format(language: string, country?: string, { separator } : { separator?: string } = { separator: '_' }): string {
        // fallback to language if country is not provided
        if (!country) {
            country = language
        }
        return `${language.toLowerCase()}${separator}${country.toUpperCase()}`
    }

    getSeparator(type: 'locale' | 'language-code'): string {
        return type === 'locale' ? '_' : '-'
    }

    /**
     * @note GET_ISO - a core function that guards the type of the iso code
     */

    /**
     * Checks if the provided ISO code is valid or not.
     *
     * @param {string} iso - ISO code to be validated
     * @return {boolean} True if the ISO code is valid, false otherwise
     */
    isValidIso(iso: string): iso is ISOCode {
        return iso in isoList
    }

    /**
     * @note GET_ALL
     */

    /**
     * Retrieves all ISO codes from the isoList object.
     *
     * This function does not accept any parameters.
     *
     * @return {string[]} An array of ISO codes.
     */
    getAllISO(): string[] {
        return Object.keys(isoList)
    }

    /**
     * Retrieves all available languages.
     *
     * @returns {string[]} An array of all available languages.
     */
    getAllLanguages(): string[] {
        const languages: Record<string, boolean> = {}
        for (const iso in isoList) {
            for (const language of isoList[iso as ISOCode].languages) {
                languages[language] = true
            }
        }
        return Object.keys(languages)
    }

    /**
     * Returns an array of languages divided by a custom separator.
     *
     * @param {string} separator - The separator used to join the language and country code. Defaults to '_'.
     * @returns {string[]} - An array of language codes.
     */
    private getAllCountryLanguage(separator: string = '_'): string[] {
        const languageCodes: Record<string, boolean> = {}
        for (const iso in isoList) {
            for (const language of isoList[iso as ISOCode].languages) {
                const languageCode = this.format(language, iso, { separator })
                languageCodes[languageCode] = true
            }
        }
        return Object.keys(languageCodes)
    }

    /**
     * Returns an array of all language codes.
     *
     * @returns {string[]} - An array of Locale codes.
     */
    getAllLanguageCodes(): string[] {
        return this.getAllCountryLanguage('-')
    }

    /**
     * Returns an array of all language codes.
     *
     * @returns {string[]} - An array of language codes.
     */
    getAllLocales(): string[] {
        return this.getAllCountryLanguage()
    }

    /**
     * Iterates over isoList and collects the name property
     * of each item into an array.
     *
     * This function takes no parameters.
     *
     * @return {string[]} An array of names collected from isoList.
     */
    getAllNames(): string[] {
        const names: string[] = []
        for (const iso in isoList) {
            names.push(isoList[iso as ISOCode].name)
        }
        return names
    }

    /**
     * Retrieves all original names from the isoList.
     *
     * This function iterates over each element in the isoList, extracting
     * the 'original' property value, and stores them in an array. The
     * array of original names is then returned.
     *
     * @return {string[]} An array of original names from the isoList.
     */
    getAllOriginalNames(): string[] {
        const names: string[] = []
        for (const iso in isoList) {
            names.push(isoList[iso as ISOCode].original)
        }
        return names
    }

    /**
     * @note GET_BY_ISO - here we get the data using the iso code (e.g. "IT")
     */

    /**
     * Retrieves ISO data by ISO code or string.
     *
     * @param {ISOCode | string} iso - ISO code or string.
     * @return {ISOData[ISOCode] | false} ISO data if found, otherwise false.
     */
    getByIso(iso: ISOCode | string): ISOData[ISOCode] | false {
        if (this.isValidIso(iso)) {
            return isoList[iso]
        }
        return false
    }

    /**
     * Fetches the languages associated with the given ISO code.
     *
     * @param {string} iso - The ISO code of the country.
     * @param format - The format to return the data in.
     * @return {string[] | false} An array of languages associated with the ISO code,
     *                            or false if no data found.
     */
    getLanguages(
        iso: string,
        format?: 'locale' | 'language-code'
    ): string[] | false {
        const isoData = this.getByIso(iso)
        // Return false if no data is found
        if (!isoData) {
            return false
        }
        switch (format) {
            case 'locale':
                return isoData.languages.map((language) => {
                    return `${language}_${iso}`
                })
            case 'language-code':
                return isoData.languages.map((language) => {
                    return `${language}-${iso}`
                })
            default:
                return isoData.languages
        }
    }

    /**
     * Returns the name associated with the given ISO code.
     *
     * @param {string} iso - An ISO code
     * @return {string | false} The name associated with the ISO code,
     * or false if no such ISO code exists.
     */
    getNameByISO(iso: string): string | false {
        const isoData = this.getByIso(iso)
        return isoData ? isoData.name : false
    }

    /**
     * Returns the original data by ISO code.
     *
     * @param {string} iso - The ISO code to fetch data for
     * @return {string | false} The original data related to the ISO code
     * or false if it doesn't exist
     */
    getOriginalNameByISO(iso: string): string | false {
        const isoData = this.getByIso(iso)
        return isoData ? isoData.original : false
    }

    /**
     * Generates a new object where the keys are derived from the specified `isoData` object's `languages` property.
     * The values of the new object are copies of the `isoData` objects with an additional `code` property set to the ISO code.
     *
     * @param isoData - The `CountryData` object containing language information.
     * @param iso - The ISO code for the `isoData` object.
     * @param type - Optional. Specify the type of key to generate. It Can be one of 'locale' or 'language-code'. Defaults to 'locale'.
     * @returns A new object with keys derived from the `languages` property and values consisting of copies of `isoData` objects with an additional `code` property.
     */
    getAsKey(
        isoData: Country,
        iso: ISOCode,
        type?: 'locale' | 'language-code'
    ): { [key: string]: CountryData } {
        const result: { [key: string]: CountryData } = {}
        // Get the separator based on the type
        const separator = type === 'locale' ? '_' : '-'
        isoData.languages.forEach((language) => {
            const locale = this.format(language, iso, { separator })
            result[locale] = { ...isoData, code: iso as ISOCode }
        })
        return result
    }

    /**
     * Get country data by a given Locale format.
     *
     * @param {string} languageCode - A language code in the form of "Locale_Format"
     * @return {CountryData | null} Returns CountryData if a match is found, null otherwise
     */
    getByLocale(languageCode: string): CountryData | null {
        // Split the languageCode by "_"
        const [iso] = languageCode.split('_')

        // Check if the iso code is valid
        if (this.isValidIso(iso)) {
            const isoData: Country = isoList[iso]
            return { ...isoData, code: iso }
        }

        return null // Return null if no match is found
    }

    /**
     * Retrieves the data for a given country from a list of ISO country codes.
     *
     * @param {string[]} isos - the array of ISO country codes to search for
     * @return {Record<string, Country>} The data associated with the country if found, null otherwise.
     */
    getCountriesByISO(isos: string[]): Record<string, Country> {
        const result: Record<string, Country> = {}

        for (const iso in isos) {
            // check if the key of isoData is the same as the iso code
            if (this.isValidIso(isos[iso])) {
                result[isos[iso]] = isoList[isos[iso] as ISOCode]
            }
        }

        return result
    }

    /**
     * Retrieves all languages associated with the given array of ISO codes.
     *
     * @param {string[]} isos - An array of ISO codes.
     * @return {string[]} An array of all languages associated with the given ISO codes.
     */
    getAllLanguagesByISO(isos: string[]): string[] {
        const languages: Record<string, boolean> = {}

        for (const iso of isos) {
            const isoData = this.getByIso(iso)
            if (isoData) {
                isoData.languages.forEach((language) => {
                    languages[language] = true
                })
            }
        }

        return Object.keys(languages)
    }

    /**
     * Retrieves all language codes associated with the given array of ISO codes.
     *
     * @param {string[]} isos - An array of ISO codes.
     * @return {string[]} An array of all language codes associated with the given ISO codes.
     */
    getAllLanguageCodesByISO(isos: string[], type?: string): string[] {
        const languageCodes: Record<string, boolean> = {}
        const separator = type === 'locale' ? '_' : '-'

        for (const iso of isos) {
            const isoData = this.getByIso(iso)
            if (isoData) {
                isoData.languages.forEach((language) => {
                    const languageCode = this.format( language, iso, { separator })
                    languageCodes[languageCode] = true
                })
            }
        }

        return Object.keys(languageCodes)
    }

    /**
     * Retrieves all items of a specified type.
     *
     * @param {string} type - Type of items to retrieve. Can be "iso", "languages",
     * "names", "original", "language-codes", or "locales". If no type is provided, returns the isoList.
     * @return Depending on the type parameter, either a list of ISOs, languages,
     * names, original names, or the isoList.
     */
    getAll(type?: string): string[] | false {
        switch (type) {
            case 'iso':
                return this.getAllISO()
            case 'languages':
                return this.getAllLanguages()
            case 'names':
                return this.getAllNames()
            case 'original':
                return this.getAllOriginalNames()
            case 'language-codes':
                return this.getAllLanguageCodes()
            case 'locales':
                return this.getAllLocales()
            default:
                return false
        }
    }

    /**
     * Retrieves data by ISO code and a specific type.
     *
     * @param {string} iso - The ISO code to search for.
     * @param {"languages"|"names"|"original"|'language-code'|'locales'} type - The type of data to retrieve.
     *                                                If not provided, default data is returned.
     * @return The data corresponding to the provided ISO and type.
     */
    getBy(
        iso: string,
        type?: 'languages' | 'names' | 'original' | 'language-code' | 'locales'
    ): string | string[] | Country | false {
        if (type === 'languages') {
            return this.getLanguages(iso)
        } else if (type === 'language-code') {
            return this.getLanguages(iso, 'language-code')
        } else if (type === 'locales') {
            return this.getLanguages(iso, 'locale')
        } else if (type === 'names') {
            return this.getNameByISO(iso)
        } else if (type === 'original') {
            return this.getOriginalNameByISO(iso)
        }
        return this.getByIso(iso)
    }

    /**
     * Returns a list of countries that speak the given languages.
     * For example, if you pass in ["en", "fr"], it will return all countries that speak English or French.
     * TODO: Add support for AND/OR
     *
     * @param {string[]} languages - An array of languages to check against.
     * @return {{[key: string]: Country}[]} Returns an array of countries that speak any of the
     * given languages.
     */
    getCountriesByLanguage(languages: string[]): {
        [key: string]: Country
    } {
        const result: { [K in ISOCode]?: Country } = {}

        for (const iso in isoList) {
            const isoData = isoList[iso as ISOCode]

            for (const language of languages) {
                // Check if the iso code is valid and the language matches
                if ((isoData.languages as string[]).includes(language)) {
                    result[iso as ISOCode] = isoData
                }
            }
        }

        return result
    }

    /**
     * Generates a new object where the keys are derived from the specified field of each item in the `isoList` object.
     * The values of the new object are copies of the corresponding `isoData` objects with an additional `code` property set to the ISO code.
     *
     * @param field - The field to use as the key for the resulting object. It can be one of 'languages', 'name', or 'original'.
     * @returns A new object with keys derived from the specified field and values consisting of copies of the corresponding `isoData` objects with an additional `code` property.
     */
    asKey(
        field: 'languages' | 'name' | 'original' | 'locale' | 'language-code'
    ): Record<string, CountryData> {
        const result: Record<string, CountryData> = {}

        for (const iso in isoList) {
            const isoData = isoList[iso as ISOCode]
            if (field === 'locale') {
                return this.getAsKey(isoData, iso as ISOCode, field)
            } else if (field === 'language-code') {
                return this.getAsKey(isoData, iso as ISOCode, field)
            } else {
                const keyValue = isoData[field]
                if (keyValue instanceof Array) {
                    keyValue.forEach((value) => {
                        result[value] = { ...isoData, code: iso as ISOCode }
                    })
                } else {
                    result[keyValue] = { ...isoData, code: iso as ISOCode }
                }
            }
        }

        return result
    }

    /**
     * This function retrieves country data by its name.
     *
     * @param {string} name - The name of the country to fetch data for.
     * @return {CountryData} Returns country data for the given name
     * or null if no matching country is found.
     */
    getCountry(name: string): CountryData | false {
        for (const iso in isoList) {
            const isoData = isoList[iso as ISOCode]

            if (isoData.name === name || isoData.original === name) {
                return { ...isoData, code: iso as ISOCode }
            }
        }

        return false
    }
}
