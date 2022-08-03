//ApplicationViews.js- holds routes
import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
//import { FactForm } from "../facts/FactForm"
import { FactList } from "../facts/FactList"
import { PlayContainer } from "../play/PlayContainer"
import { Rules } from "../rules/Rules"
import { FactEdit } from "../facts/FactEdit"
import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import "../play/Play.css"
    
export const ApplicationViews = () => {
    const navigate = useNavigate()
        return (
            <Routes>
                <Route path="/" element={
                    <Container>
                        <Row xs="2">
                            <Col xs="3"
                                className="header"
                                md={{
                                    offset:3
                                }}
                            >
                            <h1 className="h1">
                            Fun With Flags
                            </h1>
                            <h3 className="h2">
                            A Vexillology Quiz App
                            </h3>
                            </Col>
                            <Col xs="3"
                            >
                            <img className="logo" src= "https://upload.wikimedia.org/wikipedia/commons/c/c2/GDJ-World-Flags-Globe.svg" alt="world" />
                           
                            </Col>
                        </Row>
               
                        <Outlet />
                        </Container>
                }>
                    
                    <Route path="rules" element={ <Rules /> } />
                    <Route path="favorites" element={ <FactList /> } />
                    {/* <Route path="favorites/create" element={ <FactForm />} /> */}
                    <Route path="favorites/userFacts/:userFactObjectId/edit" element={ <FactEdit />} />
                    <Route path="play" element={ <PlayContainer />} />
                </Route>
            </Routes>
        )
    }
