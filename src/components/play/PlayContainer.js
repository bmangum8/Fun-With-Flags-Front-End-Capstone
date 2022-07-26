// Play.js will envoke FlagGenerator and CountriesDropDown

import { CountriesDropDown } from "./CountriesDropDown"
import { FlagGenerator } from "./FlagGenerator"

export const PlayContainer = () => {
    return (
    <>
        <section>
            <FlagGenerator />
        </section>
        <section>
            <CountriesDropDown />
        </section>
    </>
    )
}