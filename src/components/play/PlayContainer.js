// Play.js is parent component of FlagGenerator and CountriesDropDown
//will maintain the state? ---wonder should it be the return of the dropdown choice
//this could be used to set the results state
//video #18 at about 7 mins--watch for help when ready to look more at state

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