// Play.js is parent component of FlagGenerator and CountriesDropDown and Results
//will maintain the state---the user choice and the actual random flag shown
//
//this could be used to set the results state and share results state with sibling components
//video TicketSearch at about 7 mins--watch for help when ready to look more at state

import { CountriesDropDown } from "./CountriesDropDown"
import { FlagGenerator } from "./FlagGenerator"
import { useState } from "react"
import { Results } from "./Results"

export const PlayContainer = () => {
    const [userChoice, setUserChoice] = useState({})
    const [flagShown, setFlagShown] = useState({})
    
    return (
    <>
            <FlagGenerator setterFlagFunction={setFlagShown} />
            <CountriesDropDown setterFunction={setUserChoice} flagShownState={flagShown}/>
            <div>
                <Results userChoiceState={userChoice} flagShownState={flagShown} />
            </div>
    </>
    )
}

//need to do results.js

//FlagGenerator and CountriesDropDown and Results act independently of each other,
//but I need them to share state, so I use props

//CountriesDropDown contains the state of userChoice--needs prop: setUserChoice
//countriesDropDown needs randomFlagObject from flagGenerator. so needs: state of flagShown
//*FlagGenerator contains the state of flagShown---needs prop: setFlagShown
//Results contains the function that compares the flagShown and the userChoice: so needs both 

//so when state changes, need useEffect to observe state

//parent component PlayContainer needs to pass a reference to the setUserChoice function
//down to FlagGenerator

//Results needs to know the state of the userChoice


//setterFunction and userChoiceState become keys on an object. 
//setUserChoice function and userChoice will be the values on the key/value pair