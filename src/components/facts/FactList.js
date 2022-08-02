import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Fact } from "./Fact"
import { Row } from 'reactstrap'

export const FactList = () => {
    const [facts, setFacts] = useState([])
    const [filteredFacts, setFiltered] = useState([]) 
    const navigate = useNavigate()
    
    const localFlagUser = localStorage.getItem("flag_user")
    const flagUserObject = JSON.parse(localFlagUser)


    const getAllFacts = () => {
        fetch(`http://localhost:8088/userFacts`)
        .then(response => response.json())
        .then((factArray) => {
            setFacts(factArray)
        })
    }

    useEffect(
        () => {
            getAllFacts()
        },
        [] // When this array is empty, you are observing initial component state
    )
    //the above use effect initializes getAllFacts on inital render

    useEffect(
        () => {
            const myFacts = facts.filter(fact => fact.userId === flagUserObject.id)
            setFiltered(myFacts)
        },
        [facts]
    )

       const HandlePlayAgainButton = (event) => {
        event.preventDefault()   
        navigate("/play")
        }


    //.map converts objects into the HTML representation of the object
    return  <>

        {/* <button onClick={() => navigate("/favorites/create")}>Add A Flag To Favorites</button> */}

        <h2>My Favorites</h2>
        <Row sm="6">
            {
                filteredFacts.map(
                    (fact) => <Fact userFactObject={fact} getAllFacts={getAllFacts}/>
                    // <FactEdit userFactObject={fact}
                )

            }

        </Row>
        <button
            onClick={(clickEvent) => HandlePlayAgainButton(clickEvent)}
            className="btn btn-primary">
                Play Again
        </button>
    
    </>
    
}
//userFactObject creates a prop that I can pass to other functions
//I am envoking the Fact component here
//as .map iterates, it will create a new fact component. and passes props to child 
