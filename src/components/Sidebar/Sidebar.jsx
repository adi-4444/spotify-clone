import React, { useState } from "react";
import "./sidebar.css";
import useSongs from "../hooks/useSongs";

const Sidebar = () => {
	const [selectedSongId, setSelectedSongId] = useState(null);
	const { loading, data, error } = useSongs(1, null);
	console.log(loading, data, error);
	const songIdHandler = (song) => {
		setSelectedSongId(song._id);
		console.log(song);
	};
	return (
		<div className='sidebar'>
			<div className='sidebar-wrapper'>
				<p className='playlist-title'>For You</p>
				<div className='search-div'>
					<input
						type='search'
						className='search'
						placeholder='Search Song, Artist'
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
				<div className='songs-list'>
					{data?.getSongs.map((song) => (
						<div
							className={`song-item ${
								song._id === selectedSongId
									? "selected-song"
									: ""
							}`}
							key={song._id}
							onClick={() => songIdHandler(song)}
						>
							<div className='first'>
								<img
									src={song.photo}
									className='song-img'
									alt='avatar'
								/>
								<div className='song-details'>
									<p className='song-title'>{song.title}</p>
									<p className='song-artist'>{song.artist}</p>
								</div>
							</div>
							<p className='song-duration'>{song.duration}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
