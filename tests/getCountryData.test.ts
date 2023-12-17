import { describe, expect } from '@jest/globals'
import { getCountryData } from '../src/ISOToLanguage'

describe('ISOToLanguage', () => {
    it('should return the country data for a valid language code', () => {
        const result = getCountryData('tk_AF')
        const expectedData = {
            languages: ['ps', 'uz', 'tk'],
            name: 'Afghanistan',
            original: 'افغانستان',
        }

        expect(result).toEqual(expectedData)
    })

    it('should return null for an invalid language code', () => {
        const result = getCountryData('InvalidCode')
        expect(result).toBeFalsy()
    })

    it('should return the country data for a valid language code', () => {
        const result = getCountryData('AF_tk')
        const expectedData = {
            languages: ['ps', 'uz', 'tk'],
            name: 'Afghanistan',
            original: 'افغانستان',
        }

        expect(result).not.toEqual(expectedData)
    })

    it('should return the country data for a valid language code', () => {
        const result = getCountryData('IT')
        const expectedData = {
            languages: ['it'],
            name: 'Italy',
            original: 'Italia',
        }

        expect(result).toEqual(expectedData)
    })

    it('should return null for an invalid language code', () => {
        const result = getCountryData(false as unknown as string)

        expect(result).toBeFalsy()
    })

    it('should return null for an invalid ISO code', () => {
        const result = getCountryData('Invalid_ISO')

        expect(result).toBeFalsy()
    })
})
