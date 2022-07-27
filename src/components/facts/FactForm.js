import { useState } from "react"
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
   
    //add default properties to initial state object
    const [fact, update] =useState({
        description: "",
        needMoreInfo: false
    })

    const navigate = useNavigate()
    

    //send the new object to the facts array (would be API post request)
    const handleSaveButtonClick = (event) => {
        event.preventDefault()   
    //console.log("you clicked the button")--works
    

    //create object to be saved to API
    const factToSendToAPI = {
        userId: flagUserObject.id,
        description: fact.description,
        needMoreInfo: fact.needMoreInfo
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
        //navigate the user back to /factForm
        navigate("/Facts")
    })
}

    return (
        <form className="factForm">
        <h2 className="factForm__title">New Flag Fact</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Type fact here"
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
                <label htmlFor="name">Do I want to look up more information about this flag?:</label>
                <input type="checkbox"
                    value={fact.needMoreInfo}
                    onChange={
                        (event) => {
                            const copy = {...fact}
                            //cant use .value with a check box. have to use .checked
                            // is a boolean value of true or false
                            copy.needMoreInfo = event.target.checked
                            //update sets the value of fact to the value of copy
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Submit Flag Fact
        </button>
    </form>
)
}
