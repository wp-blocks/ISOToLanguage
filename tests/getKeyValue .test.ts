import { describe, expect, test } from '@jest/globals'
import { getKeyValue } from '../src/'
import { IsoDataType } from '../src/type'

describe('getKeyValue', () => {
    test.each([
        ['iso', 'name', [{ value: 'AD', label: 'Andorra' } /* ... */]],
        ['language', 'original', [{ value: 'nl', label: 'Nederland' } /* ... */]],
    ])('should return the expected array for key "%s" and value "%s"', (key, value, expected) => {
        const result = getKeyValue(key as IsoDataType, value as IsoDataType)
        expect(result).toEqual(expect.arrayContaining(expected))
    })
})
