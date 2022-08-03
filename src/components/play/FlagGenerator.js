import { useState, useEffect } from "react"
import "./Play.css"


export const FlagGenerator = ({ setterFlagFunction, flagIndex }) => {
//pass the key of the object as a prop--object deconstruction

    //useState to set the state of flags. Expect it to be an array 
    const [flags, setFlags] = useState([])
    const [currentFlagObject, setCurrentFlagObject] = useState({})

    //getRandomObject function: takes an array as a parameter, chooses a random object in the array, returns the randomObject
    // const getRandomObject = (array) => {
    //     const randomObject = array[Math.floor(Math.random() * array.length)];
    //     return randomObject
    // }

    //observe the inital state with []
    //fetch request from api to the countries array
    //set flags state to the array response from json
    useEffect(
    () => {
        fetch(`http://localhost:8088/countries`)
            .then(response => response.json())
            .then((countryArray) => {
                setFlags(countryArray)
            })
    },
    [flagIndex] 
    )
    //so now have the array of countries from database
    //at this point, the value of flags is the array of countries




    // this useEffect observes when the state of flags changes. When the state changes, 
    // the setCurrentFlagObject sets the state of currentFlagObject to the return of getRandomObject
    useEffect(
        () => {
            setCurrentFlagObject(flags[flagIndex])
        },
        [flags]
    )


    //use effect observes currentFlagObject
    //so should initialize after a random flag has been rendered
    //setterFlagFunction sets flagShownState (from parent component) to the value of the currentFlagObject
    //At this point- the value of flagShownState should be an object
    useEffect(
        () => {
            setterFlagFunction(currentFlagObject)
        },
        [currentFlagObject]
    )

    
    return (
        <>
           <h2 className="h3">Guess this Flag</h2>
                   
            <section className="flag_container">
                    <img className="picture" src={currentFlagObject?.flag} alt="flagPicture" /> 
           </section>
        </>
       )
}

//works!!!
