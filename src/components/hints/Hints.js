//The user would click a button, and a hint would show up
//needs access to flagShownState from PlayContainer
//flagShownState.capital, subregion, language
// on click, the hint would show

import { Button, Row, Container } from "reactstrap"
import "../play/Play.css"

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
    <Container className="container">
        <h3 className="hints">Hints</h3>
            <p className="hints">Click the buttons below for hints</p>
      
            <Row className="hints">
                <Button size="md" color="info"
                    onClick={(clickEvent) => displayCapital(clickEvent)}>
                        Capital
               </Button> 
                {' '}
            </Row>
            <Row className="hints"> 
                <Button size="md" color="info"
                    onClick={(clickEvent) => displaySubregion(clickEvent)}>
                        Subregion
                </Button>
                {' '}
            </Row>
            <Row className="hints">
                <Button size="md" color="info"
                    onClick={(clickEvent) => displayLanguage(clickEvent)}>
                        Language
                </Button>
            </Row>
    
    </Container> 
    )
}


