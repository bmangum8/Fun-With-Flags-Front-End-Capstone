import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"


//flagShownState and userChoiceState are props passed from parent component
//this ResultsPage component will not initialize if the submit button has not been clicked (in handleSubmitButton in CountriesDropDown)

export const ResultsPage = ({ flagShownState, userChoiceState, changeFlagDisplay }) => {
    const localFlagUser = localStorage.getItem("flag_user")
    const flagUserObject = JSON.parse(localFlagUser)
    const navigate = useNavigate()
    
    const [favorite, setFavorite] =useState({
        countryFlag: "",
        favorite: true
    })


    const ResultsMessage = () => {
       if (parseInt(userChoiceState) === flagShownState.id) {
           return <>
                <h2>Yay! You are correct!</h2>
                <h3>Here is some info about {flagShownState.name}. </h3>
                <p>The capital is {flagShownState.capital}. 
                The people speak {flagShownState.language}. 
                It is located in {flagShownState.subregion}</p>
           </>
           } else {
               return <>
                    <h2>Sorry, your answer was not correct.</h2>
                    <h3>The answer is {flagShownState.name}.</h3>
                    <p>Here is some info about {flagShownState.name}. 
                    The capital is {flagShownState.capital}. 
                    The people speak {flagShownState.language}. 
                    It is located in {flagShownState.subregion}.</p>
                </> 
       }
    }
    const confirmFavorite= () => {
        alert("Flag Added to Favorites List")
    }

    const handleAddToFavoritesButton = (event) => {
        event.preventDefault()
        //create object to be saved to API
        const favoritesToAPI = {
            userId: flagUserObject.id,
            countryFlag: flagShownState.flag,
            favorite: favorite.favorite
           
        }

    //fetch() to post object to API
    return fetch(`http://localhost:8088/userFacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //we cant send a raw JS object, we have to stringify it
        body: JSON.stringify(favoritesToAPI)
    })
    // confirmFavorite()
    }

return (
    <>
    <ResultsMessage />
    <button 
        onClick={(clickEvent) => changeFlagDisplay(clickEvent)}
            className="btn btn-primary">
                Play Again
    </button>
    <button 
        onClick={(clickEvent) => {handleAddToFavoritesButton(clickEvent); confirmFavorite(clickEvent)}}
            className="btn btn-primary">
                Add Flag to Favorites
    </button>

    {/* <fieldset>
    <div className="form-group">
        <label htmlFor="name">Add Flag to Favorites</label>
        <input type="checkbox"
            value={favorite.countryFlag}
            onChange={
                (event) => {
                    const copy = {...favorite}
                    //cant use .value with a check box. have to use .checked
                    // is a boolean value of true or false
                    copy.favorite = event.target.checked
                    setFavorite(copy)
                }
            } />
    </div>
</fieldset> */}
</>
)
}

/*
<section className="flag">
//         <img src={flagShownState?.flag} alt="flagPicture" /> 
//     </section>
//     <h3>{flagShownState?.capital}</h3>
//     <h3>{flagShownState?.subregion}</h3>
//     <h3>{flagShownState?.language}</h3>
*/
   
