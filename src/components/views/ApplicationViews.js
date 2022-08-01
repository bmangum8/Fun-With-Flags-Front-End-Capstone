//ApplicationViews.js- holds routes
import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { FactForm } from "../facts/FactForm"
import { FactList } from "../facts/FactList"
import { PlayContainer } from "../play/PlayContainer"
import { Rules } from "../rules/Rules"

    
    
export const ApplicationViews = () => {
    const navigate = useNavigate()
        return (
            <Routes>
                <Route path="/" element={
                    <>
                        <h1 className="title--main">Fun With Flags</h1>
                        <div>A Vexillology Quiz App</div>
                        <button onClick={() => navigate("/rules")}>Rules</button>
                        <button onClick={() => navigate("/play")}>Play Now</button>
                        <button onClick={() => navigate("/favorites")}>My Favorites</button>
                        <Outlet />
                    </>
                }>
                    
                    <Route path="rules" element={ <Rules /> } />
                    <Route path="favorites" element={ <FactList /> } />
                    <Route path="favorite/create" element={ <FactForm />} />
                    <Route path="play" element={ <PlayContainer />} />
                </Route>
            </Routes>
        )
    }



    //from honey raes---dont think I need
    //const localFlagUser = localStorage.getItem("flag_user")
    //this comes from the log in code
    //It is supposed to only show the application if the user has signed in??
    //const flagUserObject = JSON.parse(localFlagUser)