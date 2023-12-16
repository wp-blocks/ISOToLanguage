import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src/index'

describe('ISOToLanguage', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('isValidISO', () => {
        it('should return true for a valid ISO code', () => {
            const result = isoToLanguage.isValidIso('AD')
            expect(result).toBe(true)
        })

        it('should return false for an invalid ISO code', () => {
            const result = isoToLanguage.isValidIso('Invalid_ISO')
            expect(result).toBe(false)
        })

        it('should return false for an empty string', () => {
            const result = isoToLanguage.isValidIso('')
            expect(result).toBe(false)
        })

        it('should return false for undefined', () => {
            const result = isoToLanguage.isValidIso(undefined as any)
            expect(result).toBe(false)
        })
    })
})
