import { describe, expect, test } from '@jest/globals'

import { isoList } from '../src/iso'
import ISOToLanguage from '../src/index'

describe('ISOToLanguage', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getAllISO', () => {
        it('should return an array of ISO codes', () => {
            const result = isoToLanguage.getAllISO()
            const isoCodes = Object.keys(isoList)

            expect(result).toEqual(isoCodes)
        })
    })

    describe('getAllLanguages', () => {
        it('should return an array of all available languages', () => {
            const result = isoToLanguage.getAllLanguages()
            const allLanguages = Object.values(isoList)
                .flatMap((isoData) => isoData.languages)
                .filter((value, index, self) => self.indexOf(value) === index)

            expect(result).toEqual(allLanguages)
        })
    })

    describe('getAllNames', () => {
        it('should return an array of names collected from isoList', () => {
            const result = isoToLanguage.getAllNames()
            const expectedNames = Object.values(isoList).map(
                (isoData) => isoData.name
            )

            expect(result).toEqual(expectedNames)
        })
    })

    describe('getAllOriginalNames', () => {
        it('should return an array of original names from isoList', () => {
            const result = isoToLanguage.getAllOriginalNames()
            const expectedOriginalNames = Object.values(isoList).map(
                (isoData) => isoData.original
            )

            expect(result).toEqual(expectedOriginalNames)
        })
    })
})
