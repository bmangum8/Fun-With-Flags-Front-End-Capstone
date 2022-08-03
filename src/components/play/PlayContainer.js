// Play.js is parent component of FlagGenerator and CountriesDropDown and Results
//will maintain the state---the user choice and the actual random flag shown
//this component is used to set the results state and share results state with sibling components

import { CountriesDropDown } from "./CountriesDropDown"
import { FlagGenerator } from "./FlagGenerator"
import { useEffect, useState } from "react"
import { ResultsPage } from "./ResultsPage"
import { Hints } from "../hints/Hints"
import { Container, Col, Row } from 'reactstrap';
import "./Play.css"



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
            <Row xs="3">
                <Col xs="3"
                  className="border"
                  >
                        {
                        toggle ? <ResultsPage changeFlagDisplay={changeFlagDisplay} setterFlagFunction={setFlagShown} userChoiceState={userChoice} flagShownState={flagShown} />
                        : <CountriesDropDown setUserChoiceFunction={setUserChoice} flagShownState={flagShown} userChoiceState={userChoice} setterToggleFunction={setToggle} />
                        }
                </Col>
                <Col xs="7"
                  className="border"
                >
                    <FlagGenerator setterFlagFunction={setFlagShown} flagIndex={flagIndex} />
                
                </Col>
                <Col xs="2"
                    className="border"
                >
                    <Hints flagShownState={flagShown} />
                </Col>
            </Row>
        </Container>
    )
}


//FlagGenerator and CountriesDropDown and Results act independently of each other,
//but I need them to share state, so I use props

//setterFunction and userChoiceState become keys on an object. 
//setUserChoice function and userChoice will be the values on the key/value pair
