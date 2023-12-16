import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src/index'

let isoToLanguage: ISOToLanguage

describe('ISOToLanguage', () => {

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    it('should return the country data for a valid language code', () => {
        const result = isoToLanguage.getCountryData('tk_AF')
        const expectedData = {
            languages: ['ps', 'uz', 'tk'],
            name: 'Afghanistan',
            original: 'افغانستان',
        }

        expect(result).toEqual(expectedData)
    })

    it('should return null for an invalid language code', () => {
        const result = isoToLanguage.getCountryData('InvalidCode')
        expect(result).toBeFalsy()
    })


    it('should return the country data for a valid language code', () => {
        const result = isoToLanguage.getCountryData('AF_tk')
        const expectedData = {
            languages: ['ps', 'uz', 'tk'],
            name: 'Afghanistan',
            original: 'افغانستان',
        }

        expect(result).not.toEqual(expectedData)
    })

    it('should return null for an invalid language code', () => {
        const result = isoToLanguage.getCountryData(false as unknown as string)

        expect(result).toBeFalsy()
    })

    it('should return null for an invalid ISO code', () => {
        const result = isoToLanguage.getCountryData('Invalid_ISO')

        expect(result).toBeFalsy()
    })
})
