import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Player from "./components/Player/Player";

function App() {
	const [selectedPlaylist, setSelectedPlaylist] = useState({
		id: 1,
		title: "For You",
	});
	const [playlistId, setPlaylistId] = useState(1);
	const [selectedSongIdx, setSelectedSongIdx] = useState(-1);
	const [selectedSong, setSelectedSong] = useState({});
	const [songsLength, setSongsLength] = useState([]);
	const playlistHandler = (item) => {
		setPlaylistId(item.id);
		setSelectedPlaylist(item);
	};
	const songHandler = (song) => {
		setSelectedSong(song);
	};

	return (
		<div className='App'>
			<Navigation
				playlistId={playlistId}
				playlistHandler={playlistHandler}
			/>
			<Sidebar
				selectedPlaylist={selectedPlaylist}
				playlistId={playlistId}
				selectedSong={selectedSong}
				setSelectedSong={setSelectedSong}
				songHandler={songHandler}
				selectedSongIdx={selectedSongIdx}
				setSelectedSongIdx={setSelectedSongIdx}
				setSongsLength={setSongsLength}
			/>
			<Player
				selectedSong={selectedSong}
				selectedSongIdx={selectedSongIdx}
				songsLength={songsLength}
				setSelectedSongIdx={setSelectedSongIdx}
			/>
		</div>
	);
}

export default App;
