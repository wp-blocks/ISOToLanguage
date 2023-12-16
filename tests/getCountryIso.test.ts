import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src/index'

let isoToLanguage: ISOToLanguage

describe('getCountriesByISO', () => {

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    it('should return an object of country data for valid ISO codes', () => {
        const result = isoToLanguage.getCountriesByISO(['AD', 'AE', 'AF'])
        const expectedData = {
            AD: {
                languages: ['ca'],
                name: 'Andorra',
                original: 'Andorra',
            },
            AE: {
                languages: ['ar'],
                name: 'United Arab Emirates',
                original: 'دولة الإمارات العربية المتحدة',
            },
            AF: {
                languages: ['ps', 'uz', 'tk'],
                name: 'Afghanistan',
                original: 'افغانستان',
            },
        }

        expect(result).toEqual(expectedData)
    })

    it('should return an empty object for an array of invalid ISO codes', () => {
        const result = isoToLanguage.getCountriesByISO([
            'Invalid1',
            'Invalid2',
        ])

        expect(result).toEqual({})
    })

    it('should return an empty object for an empty array', () => {
        const result = isoToLanguage.getCountriesByISO([])

        expect(result).toEqual({})
    })
})
