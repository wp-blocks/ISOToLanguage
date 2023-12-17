import { describe, expect } from '@jest/globals'
import { getAllLanguagesByISO } from '../src/'
import { isoList } from '../src/iso'

describe('getAllLanguagesByISO', () => {
    it('should return all languages associated with the given ISO codes', () => {
        const isoCodes = ['AD', 'AE', 'AF']
        const result = getAllLanguagesByISO(isoCodes)
        const expectedLanguages = Array.from(
            new Set(isoCodes.flatMap((isoCode) => isoList[isoCode].languages))
        )

        expect(result).toEqual(expectedLanguages)
    })

    it('should return an empty array for an empty input', () => {
        const result = getAllLanguagesByISO([])
        expect(result).toEqual([])
    })

    it('should return an empty array for invalid ISO codes', () => {
        const isoCodes = ['InvalidCode1', 'InvalidCode2']
        const result = getAllLanguagesByISO(isoCodes)
        expect(result).toEqual([])
    })
})
