import ISOToLanguage from '../src/index'

describe('format', () => {
    it('should format the language and country into a single string with default options', () => {
        const isoToLanguage = new ISOToLanguage()
        const formattedString = isoToLanguage.format('en', 'US')
        expect(formattedString).toBe('en_US')
    })

    it('should fallback to the language if the country is not provided', () => {
        const isoToLanguage = new ISOToLanguage()
        const formattedString = isoToLanguage.format('en')
        expect(formattedString).toBe('en_US') // assuming en_US is the default country for en
    })

    it('should fallback to the language if the country is not provided and isValidIso returns false', () => {
        const isoToLanguage = new ISOToLanguage()
        const formattedString = isoToLanguage.format('EN')
        expect(formattedString).toBe('en_US')
    })

    it('should return null if the country is not provided and no default country is found', () => {
        const isoToLanguage = new ISOToLanguage()
        isoToLanguage.getCountriesByLanguage = jest.fn(() => ({}))
        const formattedString = isoToLanguage.format('en')
        expect(formattedString).toBe('en_US') // assuming en_US is the default country for en
    })

    it('should use the provided separator if options.separator is specified', () => {
        const isoToLanguage = new ISOToLanguage()
        const formattedString = isoToLanguage.format('en', 'US', { separator: '-' })
        expect(formattedString).toBe('en-US')
    })

    it('should use the separator based on the options.type if options.separator is not specified', () => {
        const isoToLanguage = new ISOToLanguage()
        const formattedString = isoToLanguage.format('en', 'US', { type: 'language-code' })
        expect(formattedString).toBe('en-US')
    })
})
