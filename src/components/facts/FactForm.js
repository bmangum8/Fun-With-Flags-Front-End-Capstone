import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


/*Recap:
When the button is clicked
all the instructions in this component will run
create a js object with all the properties
stringify obj
sent post request to JSON saying save for me
when done, respond back to me
navigate user back to fact list
*/


export const FactForm = () => {
    const localFlagUser = localStorage.getItem("flag_user")
    const flagUserObject = JSON.parse(localFlagUser)
    
    const [countries, setCountries] = useState([])
    const navigate = useNavigate()
   
    //add default properties to initial state object
    const [fact, update] =useState({
        // countryId: 0,
        countryFlag: "",
        countryName: "",
        description: "",
        favorite: true
    })

    //observe initial state of countries and set countries to array from API
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
    


    //send the new object to the facts array (would be API post request)
    const handleSaveButtonClick = (event) => {
        event.preventDefault()   
    
    //create object to be saved to API
    const factToSendToAPI = {
        userId: flagUserObject.id,
        countryFlag: fact.countryFlag,
        countryName: fact.countryName,
        description: fact.description,
        favorite: true
    }

    //fetch() to post object to API
    return fetch(`http://localhost:8088/userFacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //we cant send a raw JS object, we have to stringify it
        body: JSON.stringify(factToSendToAPI)
    })

    //navigate user back to fact list
    .then(response => response.json())
    .then(() => {
        //navigate the user back to /favorites
        navigate("/favorites")
    })
}


    return (
        <form className="factForm">
        <h2 className="factForm__title">New Favorite Flag</h2>
        <fieldset>

        <div className="form-group">
            <select 
                onChange={
                    (event) => {
                        const copy = {...fact}
                        copy.countryFlag = event.target.value
                        update(copy)
                    }
                }>
                <option value={0}>Select Flag</option>
                    {countries.map(country => (
                        <option key={country.flag} value={country.flag}>
                        {country.name} 
                </option>
            ))}
            </select>
            </div>           
            
        </fieldset>
        <fieldset>
        <div className="form-group">
            <label htmlFor="countryName">Country Name:</label>
            <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Type country name here"
                value={fact.countryName}
                onChange={
                    (event) => {
                        //makes a copy of the fact using spread operator
                        const copy = {...fact}
                        //sets the countryName property of the copy to whatever is entered in the countryName box. which is the value of the target event
                        copy.countryName = event.target.value
                       // updatefact sets the value of fact to the value of copy
                        update(copy)
                    }
                } />
        </div>
    </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="notes">Notes:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Type notes here"
                    value={fact.description}
                    onChange={
                        (event) => {
                            //makes a copy of the fact using spread operator
                            const copy = {...fact}
                            //sets the description property of the copy to whatever is entered in the description box. which is the value of the target event
                            copy.description = event.target.value
                           // update sets the value of fact to the value of copy
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Favorites</label>
                <input type="checkbox"
                    value={fact.favorite}
                    onChange={
                        (event) => {
                            const copy = {...fact}
                            //cant use .value with a check box. have to use .checked
                            // is a boolean value of true or false
                            copy.favorite = event.target.checked
                            //update sets the value of fact to the value of copy
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Add Flag to Favorites
        </button>
    </form>
)
}

