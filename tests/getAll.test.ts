import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src/index'
import { isoList } from '../src/iso'

describe('ISOToLanguage', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getAll', () => {
        it('should return all ISO codes when type is "iso"', () => {
            const result = isoToLanguage.getAll('iso')
            const expectedISOs = Object.keys(isoList)

            expect(result).toEqual(expect.arrayContaining(expectedISOs))
        })

        it('should return all languages when type is "languages"', () => {
            const result = isoToLanguage.getAll('languages')
            const expectedLanguages = isoToLanguage.getAllLanguages()

            expect(result).toEqual(expect.arrayContaining(expectedLanguages))
        })

        it('should return all names when type is "names"', () => {
            const result = isoToLanguage.getAll('names')
            const expectedNames = isoToLanguage.getAllNames()

            expect(result).toEqual(expect.arrayContaining(expectedNames))
        })

        it('should return all original names when type is "original"', () => {
            const result = isoToLanguage.getAll('original')
            const expectedOriginalNames = isoToLanguage.getAllOriginalNames()

            expect(result).toEqual(
                expect.arrayContaining(expectedOriginalNames)
            )
        })

        it('should return isoList when no type is provided', () => {
            const result = isoToLanguage.getAll()
            expect(result).toEqual(isoList)
        })

        it('should return isoList when an invalid type is provided', () => {
            const result = isoToLanguage.getAll('invalidType')
            expect(result).toEqual(isoList)
        })
    })
})
