//The user would click a button, and a hint would show up
//needs access to flagShownState from PlayContainer
//flagShownState.capital, subregion, language
// on click, the hint would show

export const Hints = ({ flagShownState }) => {

     const displayCapital = () => { 
        alert(flagShownState.capital)
     }

     const displaySubregion = () => {
        alert(flagShownState.subregion)
     }
    
     const displayLanguage = () => {
        alert(flagShownState.language)     
     }
    
    
    return (
        <>
        <button 
            onClick={(clickEvent) => displayCapital(clickEvent)}
            className="btn btn-primary">
            Capital
        </button>
        <button 
            onClick={(clickEvent) => displaySubregion(clickEvent)}
            className="btn btn-primary">
                Subregion
        </button>
        <button 
            onClick={(clickEvent) => displayLanguage(clickEvent)}
            className="btn btn-primary">
                Language
        </button>
        </>
    )
}