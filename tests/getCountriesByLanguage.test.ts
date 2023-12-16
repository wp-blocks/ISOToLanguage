import ISOToLanguage from '../src/index'

const isoToLanguage = new ISOToLanguage()

describe('getCountriesByLanguage', () => {
    it('should return an array of countries that speak the given languages', () => {
        const languages = ['en', 'es', 'fr'] // Example languages
        const result = isoToLanguage.getCountriesByLanguage(languages)

        // Add your expectations based on the isoList data
        // For demonstration purposes we assume that isoList contains specific data
        expect(result).toEqual(expect.objectContaining({
            AG: {
                languages: ['en'],
                name: 'Antigua and Barbuda',
                original: 'Antigua and Barbuda',
            },
        } ))
    })

    it('should handle an empty array of languages', () => {
        const result = isoToLanguage.getCountriesByLanguage([])
        expect(result).toEqual({})
    })

    it('should handle languages that no country speaks', () => {
        const languages = ['xx', 'yy', 'zz'] // Example languages that may not exist in isoList
        const result = isoToLanguage.getCountriesByLanguage(languages)
        expect(result).toEqual({})
    })
})
