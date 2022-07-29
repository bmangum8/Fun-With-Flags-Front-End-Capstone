import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

//flagShownState and userChoiceState are props passed from parent component
//this ResultsPage component will not initialize if there is not a userChoice selected(from parent component)

export const ResultsPage = ({ flagShownState, userChoiceState }) => {
    const navigate = useNavigate()
        
    const handlePlayAgainButton = (event) => {
        event.preventDefault()   
        navigate("/play")
    }

    const ResultsMessage = () => {
       if (parseInt(userChoiceState) === flagShownState.id) {
           return <h2>Yay! You are correct!</h2>
           } else {
           return <h2>Sorry, your answer was not correct.</h2>
       }
    }

return (
    <>
    <ResultsMessage />
    <button 
        onClick={(clickEvent) => handlePlayAgainButton(clickEvent)}
            className="btn btn-primary">
                Play Again
    </button>
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
