import { useNavigate } from "react-router-dom"
import "../play/Play.css"
import { Button } from "reactstrap"
//renders the rules in JSX

export const Rules = () => {
    const navigate = useNavigate()
    return (
      <>
        <h2 className="rules">Rules</h2>

        <article className="rules">
                <ol className="rule">
                    <li>You will see a flag.</li> 
                    <li>Choose the country from the drop down menu that corresponds to the flag.</li>
                    <li>Click the submit button.</li> 
                    <li>Ready to play? Click the Play Now button below.</li>
                </ol>
        </article>
        
        <Button size="lg" color="primary"
        onClick={() => navigate("/play")}>Play Now</Button>
    </>
    )
}