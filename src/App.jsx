import { useState, useEffect } from "react";
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
	const [songs, setSongs] = useState([]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songSelectedPlaylistId, setSongSelectedPlaylistId] =
		useState(playlistId);
	const [audio, setAudio] = useState(null);

	useEffect(() => {
		setIsPlaying(false);
	}, []);

	useEffect(() => {
		// this one is for play/pause from keyboard shortcuts or bluetooth controls
		if (audio) {
			audio.addEventListener("play", () => {
				setIsPlaying(true);
			});
			audio.addEventListener("pause", () => {
				setIsPlaying(false);
			});
		}
		return () => {
			if (audio) {
				audio.removeEventListener("play", () => {
					setIsPlaying(true);
				});
				audio.removeEventListener("pause", () => {
					setIsPlaying(false);
				});
			}
		};
	}, [audio]);

	const playlistHandler = (item) => {
		setPlaylistId(item?.id);
		setSelectedPlaylist(item);
	};

	const songHandler = (song) => {
		if (songSelectedPlaylistId !== playlistId) {
			setSongSelectedPlaylistId(playlistId);
		}
		setSelectedSong(song);
		if (audio) {
			audio?.pause();
		}
		const newAudio = new Audio(song?.url);
		setAudio(newAudio);
		setIsPlaying(true);
		const playAudioOnUserInteraction = () => {
			newAudio.play();
			document.removeEventListener("click", playAudioOnUserInteraction);
		};
		document.addEventListener("click", playAudioOnUserInteraction);
	};

	const playPauseHandler = () => {
		if (!audio) return;
		if (isPlaying) {
			audio?.pause();
			setIsPlaying(false);
		} else {
			audio?.play();
			setIsPlaying(true);
		}
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
				setSongs={setSongs}
				songSelectedPlaylistId={songSelectedPlaylistId}
			/>
			<Player
				selectedSong={selectedSong}
				selectedSongIdx={selectedSongIdx}
				songs={songs}
				setSelectedSongIdx={setSelectedSongIdx}
				isPlaying={isPlaying}
				playPauseHandler={playPauseHandler}
				audio={audio}
			/>
		</div>
	);
}

export default App;
