//ApplicationViews.js- holds routes
import { Outlet, Route, Routes } from "react-router-dom"
import { FactForm } from "../facts/FactForm"
import { FactList } from "../facts/FactList"
//import { CountriesDropDown } from "../play/CountriesDropDown"
//import { FlagGenerator } from "../play/FlagGenerator"
import { PlayContainer } from "../play/PlayContainer"
import { Rules } from "../rules/Rules"
//import all the components we made that need routes: Home, Play, Flag Facts, and probably other things
    
    
export const ApplicationViews = () => {
        return (
            <Routes>
                <Route path="/" element={
                    <>
                        <h1 className="title--main">Fun With Flags</h1>
                        <div>A Vexillology Quiz App</div>

                        <Outlet />
                    </>
                }>
                    <Route path="rules" element={ <Rules /> } />
                    <Route path="facts" element={ <FactList /> } />
                    <Route path="fact/create" element={ <FactForm />} />
                    <Route path="play" element={ <PlayContainer />} />
                </Route>
            </Routes>
        )
    }

    //add these when I finish the modules
    //<Route path="play" element={ <Play /> } />
    //<Route path="flagFacts" element={ <FlagFacts /> } />


    //from honey raes---dont think I need
    //const localFlagUser = localStorage.getItem("flag_user")
    //this comes from the log in code
    //It is supposed to only show the application if the user has signed in??
    //const flagUserObject = JSON.parse(localFlagUser)