import { useState, useEffect } from "react"


export const FlagGenerator = () => {

    //useState to set the state of flags. Expect it to be an array 
    const [flags, setFlags] = useState([])

    //getRandomObject function: takes an array as a parameter, chooses a random object in the array, returns the randomObject
    const getRandomObject = (array) => {
        const randomObject = array[Math.floor(Math.random() * array.length)];
        return randomObject
    }

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
    [] 
    )
    //so now have the array of countries from database
    //at this point, the value of flags is the array of countries


 
    //pass the state of flags as a parameter (which is an array of countries)
    //the return of getRandomObject is a random obj from the countries array
    //set the return of getRandonObject to a variable
    //flag is a key on the country object

    let randomFlagObj = getRandomObject(flags)   
    
    return (
        <>
           <h2>Guess this Flag</h2>
                   
            <section className="flag">
                    <img src={randomFlagObj?.flag} alt="flagPicture" /> 
           </section>
        </>
       )
}

//works!!!
