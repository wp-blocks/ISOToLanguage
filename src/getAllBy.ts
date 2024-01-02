import { getIso } from './getIso'
import { formatIso } from './formatIso'
import { getSeparator } from './utils'
import { LanguageData } from './types'

/**
 * Retrieves all language codes associated with the given array of ISO codes.
 *
 * @param {string[]} isos - An array of ISO codes.
 * @param {string} type - Optional. Specify the type of key to generate.
 * It Can be one of 'locale' or 'language-code'. Defaults to 'locale'.
 * @return {string[]} An array of all language codes associated with
 * the given ISO codes.
 */
export function getLanguagesByIso(
    isos: string[],
    type?: 'locale' | 'language-code'
): string[] {
    const languageCodes: Record<string, boolean> = {};
    const separator = type ? getSeparator(type) : undefined;

    isos.forEach((iso) => {
        const languageIsoData = getIso(iso, 'language');
        if (languageIsoData) {
            processLanguages(languageIsoData, languageCodes, separator);
        }
    });

    return Object.keys(languageCodes);
}

function processLanguages(
    languages: LanguageData[],
    languageCodes: Record<string, boolean>,
    country: string,
    separator?: string
) {
    languages.forEach((language, index) => {
        const code = separator
            ? formatIso({ languages[index], country, separator } )
            : language;
        if (code) {
            languageCodes[code] = true;
        }
    });
}
