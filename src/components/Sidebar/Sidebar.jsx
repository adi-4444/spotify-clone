import React, { useState, useEffect } from "react";
import "./sidebar.css";
import useSongs from "../hooks/useSongs";
import SongsLoading from "../Loading/SongsLoading";

const Sidebar = ({
	selectedPlaylist,
	playlistId,
	songHandler,
	selectedSongIdx,
	setSelectedSongIdx,
	setSongs,
	songSelectedPlaylistId,
	isOpen,
}) => {
	const [search, setSearch] = useState(null);
	const { loading, data, error } = useSongs(playlistId, search);

	const convertMsToHM = (num) => {
		let arr = num.toString().split("");
		arr.splice(1, 0, ":");
		return arr.join("");
	};
	const debounce = (func, delay) => {
		let timeout;
		return function (...args) {
			const context = this;
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(context, args), delay);
		};
	};
	const searchHandler = debounce((e) => {
		const text = e.target.value.trim() || null;
		setSearch(text);
	}, 550);

	useEffect(() => {
		songHandler(data?.getSongs[selectedSongIdx]);
		setSongs(data?.getSongs);
	}, [selectedSongIdx]);

	return (
		<div id='sidebar' className={`sidebar ${isOpen ? "active" : ""} `}>
			<div className='sidebar-wrapper'>
				<p className='playlist-title'>{selectedPlaylist.title}</p>
				<div className='search-div'>
					<input
						type='search'
						className='search'
						placeholder='Search Song, Artist'
						onChange={searchHandler}
					/>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='40'
						viewBox='0 0 24 24'
						className='search-img'
					>
						<path
							fill='gray'
							d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z'
						/>
					</svg>
				</div>
				{loading && <SongsLoading />}
				<div className='songs-list'>
					{data?.getSongs.map((song, idx, arr) => {
						return (
							<div
								className={`song-item ${
									songSelectedPlaylistId === playlistId &&
									song._id ===
										data?.getSongs[selectedSongIdx]?._id
										? "selected-song"
										: ""
								}`}
								key={song._id}
								onClick={() => setSelectedSongIdx(idx)}
							>
								<div className='first'>
									<img
										src={song.photo}
										className='song-img'
										alt='avatar'
									/>
									<div className='song-details'>
										<p className='song-title'>
											{song.title}
										</p>
										<p className='song-artist'>
											{song.artist}
										</p>
									</div>
								</div>
								<p className='song-duration'>
									{convertMsToHM(song.duration)}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
