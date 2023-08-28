import { useState } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Coins from "./pages/Coins";
import Sidebar from "./components/sidebar";
import Bills from "./pages/Bills";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import AddData from "./pages/AddData";
import localdb from "./assets/tempDb.json";

function App() {
	localStorage.setItem("database", JSON.stringify(localdb));
	return (
		<Router>
			<main>
				<Sidebar></Sidebar>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/Coins"
						element={<Coins />}
					/>
					<Route
						path="/Bills"
						element={<Bills />}
					/>
					<Route
						path="/add"
						element={<AddData />}
					/>
					<Route
						path="/Settings"
						element={<Settings />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					></Route>
				</Routes>
			</main>
		</Router>
	);
}

export default App;
