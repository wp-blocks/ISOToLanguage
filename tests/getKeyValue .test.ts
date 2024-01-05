import { describe, expect, test } from '@jest/globals'
import { getKeyValue } from '../src/'
import { CountryDataFields } from '../src/types'


describe('getKeyValue', () => {
    test.each([
        ['iso2', 'name', undefined, undefined, [{ value: 'AD', label: 'Andorra' } /* ... */]],
        ['original', 'language', undefined, undefined, [{ value: 'Nederland-nl', label: 'nl' } /* ... */]],
    ])('should return the expected array for key "%s" and value "%s"', (key, value, labelKey, valueKey, expected) => {
        const result = getKeyValue(key as CountryDataFields, value as CountryDataFields)
        expect(result).toEqual(expect.arrayContaining(expected))
    })
})
