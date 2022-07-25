import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const FactList = () => {
    const [facts, setFacts] = useState([])
    const [filteredFacts, setFiltered] = useState([]) 
    const navigate = useNavigate()
    
    const localFlagUser = localStorage.getItem("flag_user")
    const flagUserObject = JSON.parse(localFlagUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/userFacts`)
                .then(response => response.json())
                .then((factArray) => {
                    setFacts(factArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            const myFacts = facts.filter(fact => fact.userId === flagUserObject.id)
            setFiltered(myFacts)
        },
        [facts]
    )

    //.map converts objects into the HTML representation of the object
    return  <>

        <button onClick={() => navigate("/fact/create")}>Add Flag Fact</button>

        <h2>List of Facts</h2>

        <article className="facts">
            {
                filteredFacts.map(
                    (fact) => {
                        return <section className="fact">
                            <header>{fact.description}</header>
                            <footer>More information? {fact.needMoreInfo ? "Yes" : "No"}</footer>
                        </section>
                    }
                )

            }

        </article>
    
    </>
    
}