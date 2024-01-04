import type { CountryDataFields } from './types.js'
import { countriesIso } from './data/countries-iso.js'
import { getIso } from './getIso.js'

function itemPush(
    result: { [x: number]: string }[],
    key1: string,
    value1: string,
    key2: string,
    value2: string
): void {
    result.push({
        [key1]: value1,
        [key2]: value2,
    })
}

/**
 * Generates an array of objects suitable for React Select options based on the specified field.
 *
 * @param {string} key - The field to use as the key for the resulting object. It can be one of 'iso', 'language', 'name', 'original', 'language-code', or 'locale'.
 * @param {string} value - The field to use as the value for the resulting object. It can be one of 'iso', 'language', 'name', 'original', 'language-code', or 'locale'.
 * @param labelKey string - The key to use for the label of the resulting object. It defaults to 'label'.
 * @param valueKey string - The key to use for the value of the resulting object. It defaults to 'value'.
 * @returns {Object[]} An array of objects suitable for React Select options.
 */
export function getKeyValue(
    key: CountryDataFields,
    value: CountryDataFields,
    labelKey: string = 'label',
    valueKey: string = 'value'
) {
    const result: { [key: string]: string }[] = []

    for (const iso in countriesIso) {
        const keyValue = getIso(iso, undefined, key)
        const field = getIso(iso, undefined, value)

        if (keyValue instanceof Array) {
            keyValue.forEach((item) => {
                if (field instanceof Array) {
                    field.forEach((fieldItem) =>
                        itemPush(result, valueKey, item, labelKey, fieldItem + ' (' + item + ')')
                    )
                } else {
                    itemPush(result, valueKey, item, labelKey, field + ' (' + item + ')')
                }
            })
        } else if (field instanceof Array) {
            field.forEach((fieldItem) => {
                itemPush(result, valueKey, keyValue + '-' + fieldItem, labelKey, fieldItem)
            })
        } else {
            itemPush(result, valueKey, keyValue, labelKey, field)
        }
    }

    return result
}
