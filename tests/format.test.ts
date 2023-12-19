import { isoFormat } from '../src/'

describe('format', () => {
    it('should isoFormat the language and country into a single string with default options', () => {
        const formattedString = isoFormat('en', 'US')
        expect(formattedString).toBe('en_US')
    })

    it('should fallback to the language if the country is not provided', () => {
        const formattedString = isoFormat('en')
        expect(formattedString).toBe('en_US') // assuming en_US is the default country for en
    })

    it('should return null if the language is not found', () => {
        const formattedString = isoFormat('hh')
        expect(formattedString).toBeNull()
    })

    it('Should return null if the language is passed at the place of the country', () => {
        const formattedString = isoFormat('us')
        expect(formattedString).toBeNull()
    })

    it('Should fallback to the language if the country is not provided', () => {
        const formattedString = isoFormat('id')
        expect(formattedString).toBe('id_ID')
    })

    it('should fallback to the language if the country is not provided and isValidCountry returns false', () => {
        const formattedString = isoFormat('EN')
        expect(formattedString).toBe('en_US')
    })

    it('should use the provided separator if options.separator is specified', () => {
        const formattedString = isoFormat('en', 'US', { separator: '-' })
        expect(formattedString).toBe('en-US')
    })

    it('should use the separator based on the options.type if options.separator is not specified', () => {
        const formattedString = isoFormat('en', 'US', { type: 'language-code' })
        expect(formattedString).toBe('en-US')
    })
})
