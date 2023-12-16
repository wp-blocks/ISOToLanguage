import { describe, expect } from '@jest/globals'
import { isValidIso } from '../src/ISOToLanguage'

describe('ISOToLanguage', () => {


    describe('isValidISO', () => {
        it('should return true for a valid ISO code', () => {
            const result = isValidIso('AD')
            expect(result).toBe(true)
        })

        it('should return false for an invalid ISO code', () => {
            const result = isValidIso('Invalid_ISO')
            expect(result).toBe(false)
        })

        it('should return false for an empty string', () => {
            const result = isValidIso('')
            expect(result).toBe(false)
        })

        it('should return false for undefined', () => {
            const result = isValidIso(undefined as unknown as string)
            expect(result).toBe(false)
        })
    })
})
