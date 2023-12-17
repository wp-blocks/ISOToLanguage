import { format } from '../src/ISOToLanguage'

describe('format', () => {
    it('should format the language and country into a single string with default options', () => {
        const formattedString = format('en', 'US')
        expect(formattedString).toBe('en_US')
    })

    it('should fallback to the language if the country is not provided', () => {
        const formattedString = format('en')
        expect(formattedString).toBe('en_US') // assuming en_US is the default country for en
    })

    it('should return null if the language is not found', () => {
        const formattedString = format('hh')
        expect(formattedString).toBeNull()
    })

    it('should return null if the language is not provided', () => {
        const formattedString = format(undefined as unknown as string)
        expect(formattedString).toBeNull()
    })

    it('Should return null if the language is passed at the place of the country', () => {
        const formattedString = format('us')
        expect(formattedString).toBeNull()
    })

    it('Should fallback to the language if the country is not provided', () => {
        const formattedString = format('id')
        expect(formattedString).toBe('id_ID')
    })

    it('should fallback to the language if the country is not provided and isValidIso returns false', () => {
        const formattedString = format('EN')
        expect(formattedString).toBe('en_US')
    })

    it('should use the provided separator if options.separator is specified', () => {
        const formattedString = format('en', 'US', { separator: '-' })
        expect(formattedString).toBe('en-US')
    })

    it('should use the separator based on the options.type if options.separator is not specified', () => {
        const formattedString = format('en', 'US', { type: 'language-code' })
        expect(formattedString).toBe('en-US')
    })
})
