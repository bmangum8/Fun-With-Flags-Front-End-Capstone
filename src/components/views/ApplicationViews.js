//ApplicationViews.js- holds routes
import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { FactForm } from "../facts/FactForm"
import { FactList } from "../facts/FactList"
import { PlayContainer } from "../play/PlayContainer"
import { Rules } from "../rules/Rules"
import { FactEdit } from "../facts/FactEdit"
import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
    
    
export const ApplicationViews = () => {
    const navigate = useNavigate()
        return (
            <Routes>
                <Route path="/" element={
                    <Container>
                        <Row>
                            <Col 
                                className="bg-light border"
                                xs="auto"
                                md={{
                                    offset:3
                                }}
                            >
                            <h1>
                            Fun With Flags
                            </h1>
                            <h2>
                            A Vexillology Quiz App
                            </h2>
                            </Col>
                        </Row>
               
                        <Row xs="3">
                            <Col className="button">
                                <Button size="lg" color="primary" onClick={() => navigate("/rules")}>Rules</Button>
                                    {' '}
                            </Col>
                            <Col className="button">
                                <Button size="lg" color="primary"  onClick={() => navigate("/play")}>Play Now</Button>
                                    {' '}
                            </Col>
                            <Col className="button">
                                <Button size="lg" color="primary"  onClick={() => navigate("/favorites")}>My Favorites</Button>
                            </Col>
                        </Row>
                        <Outlet />
                        </Container>
                }>
                    
                    <Route path="rules" element={ <Rules /> } />
                    <Route path="favorites" element={ <FactList /> } />
                    {/* <Route path="favorites/create" element={ <FactForm />} /> */}
                    <Route path="favorites/userFacts/edit" element={ <FactEdit />} />
                    <Route path="play" element={ <PlayContainer />} />
                </Route>
            </Routes>
        )
    }

{/* <h1 className="title--main">Fun With Flags</h1>
                        <div>A Vexillology Quiz App</div>
                        <Button size="sm" color="primary" onClick={() => navigate("/rules")}>Rules</Button>
                        {' '}
                        <Button size="sm" color="primary"  onClick={() => navigate("/play")}>Play Now</Button>
                        {' '}
                        <Button size="sm" color="primary"  onClick={() => navigate("/favorites")}>My Favorites</Button>
                        <Outlet /> */}

    //const localFlagUser = localStorage.getItem("flag_user")
    //this comes from the log in code
    //It is supposed to only show the application if the user has signed in??
    //const flagUserObject = JSON.parse(localFlagUser)