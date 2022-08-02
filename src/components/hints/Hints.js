//The user would click a button, and a hint would show up
//needs access to flagShownState from PlayContainer
//flagShownState.capital, subregion, language
// on click, the hint would show

import { Button, Row, Col } from "reactstrap"

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
        <h3>Hints</h3>
        <Row xs="3">
            <Col className="button">
                <Button size="lg" color="primary"
                    onClick={(clickEvent) => displayCapital(clickEvent)}>
                        Capital
                </Button>
                {' '}
            </Col>
            <Col className="button">
                <Button size="lg" color="primary"
                    onClick={(clickEvent) => displaySubregion(clickEvent)}>
                        Subregion
                </Button>
                {' '}
            </Col>
            <Col className="button">
                <Button size="lg" color="primary"
                    onClick={(clickEvent) => displayLanguage(clickEvent)}>
                        Language
                </Button>
            </Col>
        </Row>
    </>
    )
}


