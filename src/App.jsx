import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Player from "./components/Player/Player";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className='App'>
			<Navigation />
			<Sidebar />
			<Player />
		</div>
	);
}

export default App;
