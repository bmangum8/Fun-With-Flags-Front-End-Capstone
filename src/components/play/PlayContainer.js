// Play.js is parent component of FlagGenerator and CountriesDropDown and Results
//will maintain the state---the user choice and the actual random flag shown
//
//this could be used to set the results state and share results state with sibling components
//video TicketSearch at about 7 mins--watch for help when ready to look more at state

import { CountriesDropDown } from "./CountriesDropDown"
import { FlagGenerator } from "./FlagGenerator"
import { useEffect, useState } from "react"
import { ResultsPage } from "./ResultsPage"
import { Hints } from "../hints/Hints"
import { Button, Container, Col, Row } from 'reactstrap';



export const PlayContainer = () => {
    const [userChoice, setUserChoice] = useState(0)
    const [flagShown, setFlagShown] = useState({})
    const [toggle, setToggle] = useState(false)
    const [flagIndex, setFlagIndex] = useState(0)

    const arrayOfFlags = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

    useEffect(
        () => {
            const randomFlag = arrayOfFlags[Math.floor(Math.random() * arrayOfFlags.length)];
            setFlagIndex(randomFlag)

        },
        []
    )

    const changeFlagDisplay = () => {
        const randomFlag = arrayOfFlags[Math.floor(Math.random() * arrayOfFlags.length)];
        setFlagIndex(randomFlag)
        setToggle(false)
    }
    

    return (
        <Container>
            <Row>
                <Col
                  className="bg-light border"
                  sm="4"
                  xs="6"
                >
                    <FlagGenerator setterFlagFunction={setFlagShown} flagIndex={flagIndex} />
                
                </Col>
                <Col
                className="bg-light border"
                sm={{
                    offset: 4,
                    size: 'auto'
                }}
                >
                    <Hints flagShownState={flagShown} />
                </Col>
            </Row>
            <Row>
                <Col
                  className="bg-light border"
                  sm="4"
                  xs="6"
                  >
                        {
                        toggle ? <ResultsPage changeFlagDisplay={changeFlagDisplay} setterFlagFunction={setFlagShown} userChoiceState={userChoice} flagShownState={flagShown} />
                        : <CountriesDropDown setUserChoiceFunction={setUserChoice} flagShownState={flagShown} userChoiceState={userChoice} setterToggleFunction={setToggle} />
                        }
                </Col>
            </Row>
        </Container>
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


{/* <FlagGenerator setterFlagFunction={setFlagShown} flagIndex={flagIndex} />
{
    toggle ? <ResultsPage changeFlagDisplay={changeFlagDisplay} setterFlagFunction={setFlagShown} userChoiceState={userChoice} flagShownState={flagShown} />
    : <CountriesDropDown setUserChoiceFunction={setUserChoice} flagShownState={flagShown} userChoiceState={userChoice} setterToggleFunction={setToggle} />
    
}
<Hints flagShownState={flagShown} />
</> 
)
} */}