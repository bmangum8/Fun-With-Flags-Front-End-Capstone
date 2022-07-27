import { useEffect, useState } from "react"


export const Fact = ({ userFactObject, getAllFacts }) => {

    const deleteButton = (id) => {
            fetch(`http://localhost:8088/userFacts/${id}`, {
                method: "DELETE"
            })
                .then(() => {
                    getAllFacts()
                    //gets state from the API again through the parent FactList
                })
    } 

    
    return <section className="fact" key={`fact--${userFactObject.id}`}>
        <header>
            {userFactObject.description}
        </header>
        <div>
            More information? {userFactObject.needMoreInfo ? "Yes" : "No"}
        </div>
        <div className="fact">
            <button onClick={()=>deleteButton(userFactObject.id)}>Delete</button>
        </div>
    </section>
    
}


//FactList is the parent of Fact. FactList passed userFactObject as a prob to Fact
//fetch(`http://localhost8088/userFacts/${userFactObject.id}` after the / is the route parameter to the fact id
