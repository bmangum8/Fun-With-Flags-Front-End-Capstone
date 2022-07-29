//contain drop down menu of countries, will contain submit button

import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate } from "react-router-dom"
//import countries.css



export const CountriesDropDown = ({ setUserChoiceFunction, flagShownState, userChoiceState, setterToggleFunction }) => {
    const [countries, setCountries] = useState([])
    
    //result is the country.id (an integer) that the user chooses from the drop down menu
    const [result, setResult] =useState(0)

    useEffect(
        () => {
            fetch(`http://localhost:8088/countries`)
            .then(response => response.json())
            .then((countriesArray) => {
                setCountries(countriesArray)
            })
        },
    []
    )


    const localFlagUser = localStorage.getItem("flag_user")
    const flagUserObject = JSON.parse(localFlagUser)
    


//we use setUserChoiceFunction (passed from the parent component as a prop) 
//to set the userChoiceState to the result (the country.id that the user chose)
useEffect(
      () => {
          setUserChoiceFunction(result)
      },
      [result]
  )
    
    const navigate = useNavigate()

    const handleSubmitButton = (event) => {
        event.preventDefault()   

//flagShownState is an object. so we need to use .id 
//userChoiceState is the id from the country drop down menu
        const resultToSendToAPI = {
          userId: flagUserObject.id,
          actualCountryId: flagShownState.id,
          userChoiceCountryId: parseInt(userChoiceState),
          correct: parseInt(userChoiceState) === flagShownState.id
        }

              
        //fetch() to post object to API 
      return fetch(`http://localhost:8088/results`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      //we cant send a raw JS object, we have to stringify it
        body: JSON.stringify(resultToSendToAPI)
      })
      
      .then(setterToggleFunction(true))
        
        // //navigate user to results page
        // .then(response => response.json())
        // .then(() => {
        //   navigate("/play/results")
        // })

        
        
      }
    
//when the user changes the country in the drop down, setResult sets the value of result to the country.id---an integer
return (
<>
  <select onChange={(event) => setResult(event.target.value)}>
    <option value={0}>Select</option>
    {countries.map(country => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ))}
  </select>
  <button 
      onClick={(clickEvent) => handleSubmitButton(clickEvent)} 
      className="btn btn-primary">
        Submit
  </button>

</>
)
}



//<input type="submit" value="Submit" /> using <button> instead

//this is the option if we want 2 functions to execute on click:
//onClick={(clickEvent) => {handleSubmitButton(clickEvent); Results(clickEvent)}} 
