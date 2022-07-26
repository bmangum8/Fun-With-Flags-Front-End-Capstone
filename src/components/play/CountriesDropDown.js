//contain drop down menu of countries, will contain submit button?

import { useEffect, useState } from "react"
import React from 'react';
//import { useNavigate } from "react-router-dom"
//import countries.css

export const CountriesDropDown = () => {
    const [countries, setCountries] = useState([])
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const toggle = () => setDropdownOpen(prevState => !prevState)
    
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
return (
<>
  <select>
    {countries.map(country => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ))}
  </select>
  <input type="submit" value="Submit" />
</>
)
}


  