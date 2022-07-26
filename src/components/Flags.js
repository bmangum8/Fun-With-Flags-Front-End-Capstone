import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./views/ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"
import "./Flags.css"
import { Authorized } from "./views/Authorized"
import { Button } from 'reactstrap'


export const Flags = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
            <Authorized>
				<>
                    <NavBar />
					<ApplicationViews />
				</>
            </Authorized>
		} />
	</Routes>
}


