import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const FactEdit = () => {
    const [favorite, updateFavorite] = useState({
        countryFlag: "",
        countryName: "",
        description: "",
        favorite: true
    })
    // const { userFactId } = useParams()
    const navigate = useNavigate()


    const localFlagUser = localStorage.getItem("flag_user")
    const flagUserObject = JSON.parse(localFlagUser)

    //only want to pull userFact objects that have the same userId as the current local user
    useEffect(() => {
        fetch(`http://localhost:8088/userFacts?userId=${flagUserObject.id}`)
    
            .then(response => response.json())
            .then((data) => {
                const userObject = data[0]
                updateFavorite(userObject)
            })
    }, [])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        //favorite is the object that we are adding information to. 
        //we need to replace the current data for this object with this data
        return fetch(`http://localhost:8088/userFacts/${favorite.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favorite)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/favorites")
            })
    }


    return (<form className="factForm">
    <h2 className="factForm__title">Edit Favorite Flag: {favorite.countryName}</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="countryName">Country Name:</label>
            <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Type country name here"
                value={favorite.countryName}
                onChange={
                    (event) => {
                        //makes a copy of the favorite using spread operator
                        const copy = {...favorite}
                        //sets the countryName property of the copy to whatever is entered in the countryName box. which is the value of the target event
                        copy.countryName = event.target.value
                       // updateFavorite sets the value of favorite to the value of copy
                        updateFavorite(copy)
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
                value={favorite.description}
                onChange={
                    (event) => {
                        //makes a copy of the favorite using spread operator
                        const copy = {...favorite}
                        //sets the description property of the copy to whatever is entered in the description box. which is the value of the target event
                        copy.description = event.target.value
                       // updateFavorite sets the value of favorite to the value of copy
                        updateFavorite(copy)
                    }
                } />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="name">Favorites</label>
            <input type="checkbox"
                checked={favorite.favorite}
                onChange={
                    (event) => {
                        const copy = {...favorite}
                        //cant use .value with a check box. have to use .checked
                        // is a boolean value of true or false
                        copy.favorite = event.target.checked
                        //updateFavorite sets the value of fact to the value of copy
                        updateFavorite(copy)
                    }
                } />
        </div>
    </fieldset>
    <button 
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary">
        Update Favorites
    </button>
</form>
)

}