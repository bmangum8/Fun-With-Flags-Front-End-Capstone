//contain drop down menu of countries, will contain submit button

import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate } from "react-router-dom"
//import countries.css



export const CountriesDropDown = ({ setterFunction, flagShownState }) => {
    const [countries, setCountries] = useState([])
    

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
    
    //set default state
    const [result, setResult] =useState({
      actualCountryId: "",
      userChoiceCountryId: "",
      correct: false
    })
    
    const navigate = useNavigate()


      //setterFunction sets the userChoice
    useEffect(
      () => {
          setterFunction(result)
      },
      [result]
  )
    
    const handleSubmitButton = (event) => {
        event.preventDefault()   
    
        const resultToSendToAPI = {
          userId: flagUserObject.id,
          actualCountryId: flagShownState.id,
          userChoiceCountryId: result.id,
          correct: result.correct
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

      // .then(() => {
      //   setResult(resultToSendToAPI)
      // })

  

    //navigate user to results page
        .then(response => response.json())
        .then(() => {
        navigate("/play/results")
    })
    }

return (
<>
  <select>
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