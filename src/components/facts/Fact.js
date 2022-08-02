import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
   Card, 
   CardBody,
   CardTitle,
   CardHeader,
   CardFooter,
   CardSubtitle,
   Button
  } from 'reactstrap';


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

    return <Card 
        style={{
            width: '25rem'
        }}
        className="fact" key={`fact--${userFactObject.id}`}
        >
    <img
        alt="flagPicture" 
        src={userFactObject.countryFlag}
    />
    <CardBody>
        <CardTitle tag="h5">
            {userFactObject.countryName}
        </CardTitle>
  
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            Notes: {userFactObject.description}
        </CardSubtitle>
        <Link to={`userFacts/edit`}>Edit Notes</Link>
    </CardBody>
    <CardFooter>
        <Button onClick={()=>deleteButton(userFactObject.id)}>Delete</Button>
    </CardFooter>
    </Card>
    
}
    

    



//FactList is the parent of Fact. FactList passed userFactObject as a prob to Fact
//fetch(`http://localhost8088/userFacts/${userFactObject.id}` after the / is the route parameter to the fact id
