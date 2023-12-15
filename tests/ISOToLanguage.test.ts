import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src'
import { isoList } from '../src/iso'

describe('ISOToLanguage', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getByISO', () => {
        it('should return ISO data for a valid ISO code', () => {
            const validISO = 'AD'
            const result = isoToLanguage.getByIso(validISO)
            const expectedData = isoList[validISO]

            expect(result).toEqual(expectedData)
        })

        it('should return ISO data for a valid ISO code', () => {
            const validISO = 'IT'
            const result = isoToLanguage.getByIso(validISO)
            const expectedData = {
                languages: ['it'],
                name: 'Italy',
                original: 'Italia',
            }

            expect(result).toEqual(expectedData)
        })

        it('should return false for an invalid ISO code', () => {
            const invalidISO = 'InvalidCode'
            const result = isoToLanguage.getByIso(invalidISO)

            expect(result).toBe(false)
        })

        it('should return false for an empty ISO code', () => {
            const emptyISO = ''
            const result = isoToLanguage.getByIso(emptyISO)

            expect(result).toBe(false)
        })

        it('should return false for undefined ISO code', () => {
            const result = isoToLanguage.getByIso(undefined as any)

            expect(result).toBe(false)
        })

        it('should return false for null ISO code', () => {
            const result = isoToLanguage.getByIso(null as any)

            expect(result).toBe(false)
        })

        it('should return false for a non-string ISO code', () => {
            const nonStringISO = 123
            const result = isoToLanguage.getByIso(nonStringISO as any)

            expect(result).toBe(false)
        })
    })
})
