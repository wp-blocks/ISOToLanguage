import { countriesGeo } from './data/countries-geo.js'
import { countriesIso } from './data/countries-iso'
import { CountryData, CountryGeo, IsoCode, ISOCountryCode } from './types'

export function getGroupedBy(field: 'region' | 'continent' | 'subRegion', groupValue: string) {
    const grouped = Object.entries(countriesGeo).reduce(
        (
            accumulator: Record<string, Record<string, CountryData | CountryGeo>>,
            value: [string, CountryGeo]
        ) => {
            const [iso, country] = value
            const key = country[field as keyof CountryGeo] as string
            if (key) {
                if (!accumulator[key]) {
                    accumulator[key] = {}
                }
                accumulator[key][iso as IsoCode] = {
                    ...countriesIso[iso as ISOCountryCode],
                    ...country,
                }
            }
            return accumulator
        },
        {}
    )

    if (groupValue) {
        return { [groupValue]: grouped[groupValue] || [] }
    }

    return grouped
}
