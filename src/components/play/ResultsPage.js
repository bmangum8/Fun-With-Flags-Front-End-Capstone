import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Button } from "reactstrap"


//flagShownState and userChoiceState are props passed from parent component
//this ResultsPage component will not initialize if the submit button has not been clicked (in handleSubmitButton in CountriesDropDown)

export const ResultsPage = ({ flagShownState, userChoiceState, changeFlagDisplay }) => {
    const localFlagUser = localStorage.getItem("flag_user")
    const flagUserObject = JSON.parse(localFlagUser)
    const navigate = useNavigate()
    
    const [favorite, setFavorite] =useState({
        countryFlag: "",
        countryName: "",
        favorite: true
    })


    const ResultsMessage = () => {
       if (parseInt(userChoiceState) === flagShownState.id) {
           return <>
                <h2 className="h2">Yay! You are correct!</h2>
                <ul>Here is some info about {flagShownState.name}: 
                <li>The capital is {flagShownState.capital}. </li>
                <li>The people speak {flagShownState.language}.</li>
                <li>It is located in {flagShownState.subregion}</li>
                </ul>
           </>
           } else {
               return <>
                    <h2 className="h2">Sorry, your answer was not correct.</h2>
                    <h3>The answer is {flagShownState.name}.</h3>
                    <ul>
                        Here is some info about {flagShownState.name}: 
                    <li>The capital is {flagShownState.capital}.</li>
                    <li>The people speak {flagShownState.language}.</li>
                    <li>It is located in {flagShownState.subregion}.</li>
                    </ul>
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
            countryName: flagShownState.name,
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
    }

return (
    <>
    <ResultsMessage />
    <Button size="lg" color="primary" className="button"
        onClick={(clickEvent) => changeFlagDisplay(clickEvent)}>
                Play Again
    </Button>

    <Button size="lg" color="primary" className="button"
        onClick={(clickEvent) => {handleAddToFavoritesButton(clickEvent); confirmFavorite(clickEvent)}}
           >
                Add Flag to Favorites
    </Button>
    </>
)
}

