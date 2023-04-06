import React from "react";
import "./player.css";

const Player = ({
	selectedSong,
	selectedSongIdx,
	setSelectedSongIdx,
	songsLength,
}) => {
	const prevSongHandler = () => {
		if (selectedSongIdx > 0) {
			setSelectedSongIdx(selectedSongIdx - 1);
		}
	};
	const nextSongHandler = () => {
		if (selectedSongIdx < songsLength - 1) {
			setSelectedSongIdx(selectedSongIdx + 1);
		}
	};
	const playPauseHandler = () => {
		//
	};
	const seekerHandler = (e) => {
		console.log(e.target.value);
	};
	return (
		<div className='player'>
			<div className='player-wrapper'>
				<div className='song-info'>
					<p className='player-title'>{selectedSong?.title}</p>
					<p className='player-artist'>{selectedSong?.artist}</p>
				</div>
				<div className='player-center'>
					<img src={selectedSong?.photo} className='player-img' />
					<input
						className='seeker'
						type='range'
						id='seek-slider'
						max='100'
						value='0'
						onChange={seekerHandler}
					/>
				</div>
				<div className='player-controlls'>
					<svg
						width='48'
						height='48'
						viewBox='0 0 48 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							cx='24'
							cy='24'
							r='24'
							fill='white'
							fillOpacity='0.1'
						/>
						<path
							d='M19.2 24C19.2 24.6365 18.9471 25.2469 18.497 25.697C18.047 26.1471 17.4365 26.4 16.8 26.4C16.1635 26.4 15.553 26.1471 15.1029 25.697C14.6529 25.2469 14.4 24.6365 14.4 24C14.4 23.3635 14.6529 22.753 15.1029 22.3029C15.553 21.8528 16.1635 21.6 16.8 21.6C17.4365 21.6 18.047 21.8528 18.497 22.3029C18.9471 22.753 19.2 23.3635 19.2 24ZM26.4 24C26.4 24.6365 26.1471 25.2469 25.697 25.697C25.247 26.1471 24.6365 26.4 24 26.4C23.3635 26.4 22.753 26.1471 22.3029 25.697C21.8529 25.2469 21.6 24.6365 21.6 24C21.6 23.3635 21.8529 22.753 22.3029 22.3029C22.753 21.8528 23.3635 21.6 24 21.6C24.6365 21.6 25.247 21.8528 25.697 22.3029C26.1471 22.753 26.4 23.3635 26.4 24ZM31.2 26.4C31.8365 26.4 32.447 26.1471 32.897 25.697C33.3471 25.2469 33.6 24.6365 33.6 24C33.6 23.3635 33.3471 22.753 32.897 22.3029C32.447 21.8528 31.8365 21.6 31.2 21.6C30.5635 21.6 29.953 21.8528 29.5029 22.3029C29.0528 22.753 28.8 23.3635 28.8 24C28.8 24.6365 29.0528 25.2469 29.5029 25.697C29.953 26.1471 30.5635 26.4 31.2 26.4Z'
							fill='white'
						/>
					</svg>

					<div className='controls-center'>
						<svg
							width='25'
							height='17'
							viewBox='0 0 25 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							onClick={() => prevSongHandler()}
							className='pointer'
						>
							<path
								d='M21.712 0.389371C21.9529 0.228605 22.233 0.136269 22.5224 0.122215C22.8117 0.108162 23.0994 0.172916 23.3548 0.309572C23.6102 0.446227 23.8237 0.649657 23.9726 0.898156C24.1214 1.14665 24.2 1.4309 24.2 1.72057V14.5206C24.2 14.8102 24.1214 15.0945 23.9726 15.343C23.8237 15.5915 23.6102 15.7949 23.3548 15.9316C23.0994 16.0682 22.8117 16.133 22.5224 16.1189C22.233 16.1049 21.9529 16.0125 21.712 15.8518L13 10.0438V14.5206C13 14.8102 12.9214 15.0945 12.7726 15.343C12.6237 15.5915 12.4102 15.7949 12.1548 15.9316C11.8994 16.0682 11.6117 16.133 11.3224 16.1189C11.033 16.1049 10.7529 16.0125 10.512 15.8518L0.911983 9.45177C0.692852 9.30565 0.51318 9.1077 0.388912 8.87548C0.264647 8.64326 0.199625 8.38395 0.199625 8.12057C0.199625 7.85719 0.264647 7.59788 0.388912 7.36566C0.51318 7.13344 0.692852 6.93549 0.911983 6.78937L10.512 0.389371C10.7529 0.228605 11.033 0.136269 11.3224 0.122215C11.6117 0.108162 11.8994 0.172916 12.1548 0.309572C12.4102 0.446227 12.6237 0.649657 12.7726 0.898156C12.9214 1.14665 13 1.4309 13 1.72057V6.19737L21.712 0.389371Z'
								fill='white'
							/>
						</svg>
						<svg
							width='48'
							height='49'
							viewBox='0 0 48 49'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M24 48.1205C30.3652 48.1205 36.4697 45.5919 40.9706 41.091C45.4714 36.5902 48 30.4857 48 24.1205C48 17.7553 45.4714 11.6508 40.9706 7.14992C36.4697 2.64905 30.3652 0.120483 24 0.120483C17.6348 0.120483 11.5303 2.64905 7.02944 7.14992C2.52856 11.6508 0 17.7553 0 24.1205C0 30.4857 2.52856 36.5902 7.02944 41.091C11.5303 45.5919 17.6348 48.1205 24 48.1205ZM22.665 15.6245C22.2132 15.323 21.688 15.1499 21.1455 15.1236C20.6031 15.0972 20.0636 15.2186 19.5847 15.4749C19.1058 15.7311 18.7055 16.1125 18.4264 16.5785C18.1473 17.0444 17.9999 17.5774 18 18.1205V30.1205C17.9999 30.6636 18.1473 31.1966 18.4264 31.6625C18.7055 32.1284 19.1058 32.5099 19.5847 32.7661C20.0636 33.0223 20.6031 33.1437 21.1455 33.1174C21.688 33.091 22.2132 32.9179 22.665 32.6165L31.665 26.6165C32.0759 26.3425 32.4128 25.9714 32.6458 25.5359C32.8788 25.1005 33.0007 24.6143 33.0007 24.1205C33.0007 23.6266 32.8788 23.1404 32.6458 22.705C32.4128 22.2696 32.0759 21.8985 31.665 21.6245L22.665 15.6245Z'
								fill='white'
								onClick={() => playPauseHandler()}
								className='pointer'
							/>
						</svg>
						<svg
							width='25'
							height='17'
							viewBox='0 0 25 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							onClick={() => nextSongHandler()}
							className='pointer'
						>
							<path
								d='M3.28802 0.389371C3.04706 0.228605 2.76697 0.136269 2.47764 0.122215C2.18832 0.108162 1.9006 0.172916 1.64519 0.309572C1.38979 0.446227 1.17627 0.649657 1.02742 0.898156C0.87857 1.14665 0.799975 1.4309 0.800018 1.72057V14.5206C0.799975 14.8102 0.87857 15.0945 1.02742 15.343C1.17627 15.5915 1.38979 15.7949 1.64519 15.9316C1.9006 16.0682 2.18832 16.133 2.47764 16.1189C2.76697 16.1049 3.04706 16.0125 3.28802 15.8518L12 10.0438V14.5206C12 14.8102 12.0786 15.0945 12.2274 15.343C12.3763 15.5915 12.5898 15.7949 12.8452 15.9316C13.1006 16.0682 13.3883 16.133 13.6776 16.1189C13.967 16.1049 14.2471 16.0125 14.488 15.8518L24.088 9.45177C24.3071 9.30565 24.4868 9.1077 24.6111 8.87548C24.7354 8.64326 24.8004 8.38395 24.8004 8.12057C24.8004 7.85719 24.7354 7.59788 24.6111 7.36566C24.4868 7.13344 24.3071 6.93549 24.088 6.78937L14.488 0.389371C14.2471 0.228605 13.967 0.136269 13.6776 0.122215C13.3883 0.108162 13.1006 0.172916 12.8452 0.309572C12.5898 0.446227 12.3763 0.649657 12.2274 0.898156C12.0786 1.14665 12 1.4309 12 1.72057V6.19737L3.28802 0.389371Z'
								fill='white'
							/>
						</svg>
					</div>
					<svg
						width='48'
						height='48'
						viewBox='0 0 48 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect
							width='48'
							height='48'
							rx='24'
							fill='white'
							fillOpacity='0.1'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M23.3144 16.4782C23.5174 16.5605 23.6909 16.6999 23.8129 16.8788C23.935 17.0576 24.0001 17.2678 24 17.4828V30.5303C24 30.7453 23.9348 30.9555 23.8127 31.1342C23.6906 31.313 23.5171 31.4523 23.3141 31.5346C23.1111 31.6169 22.8877 31.6384 22.6722 31.5965C22.4567 31.5545 22.2587 31.451 22.1033 31.299L17.9844 27.2684H15.1111C14.8164 27.2684 14.5338 27.1539 14.3254 26.95C14.1171 26.7461 14 26.4695 14 26.1811V21.832C14 21.5436 14.1171 21.2671 14.3254 21.0632C14.5338 20.8593 14.8164 20.7447 15.1111 20.7447H17.9844L22.1033 16.7141C22.2587 16.562 22.4567 16.4583 22.6723 16.4163C22.8879 16.3743 23.1114 16.3959 23.3144 16.4782ZM29.1744 16.3183C29.3828 16.1145 29.6654 16 29.96 16C30.2546 16 30.5372 16.1145 30.7456 16.3183C31.7787 17.327 32.598 18.5254 33.1565 19.8448C33.715 21.1641 34.0017 22.5785 34 24.0066C34.0017 25.4347 33.715 26.849 33.1565 28.1684C32.598 29.4877 31.7787 30.6862 30.7456 31.6948C30.536 31.8928 30.2553 32.0024 29.964 32C29.6727 31.9975 29.394 31.8831 29.188 31.6815C28.982 31.4799 28.8651 31.2072 28.8626 30.9222C28.86 30.6371 28.972 30.3624 29.1744 30.1574C30.0013 29.3507 30.6569 28.3919 31.1037 27.3363C31.5505 26.2807 31.7796 25.1491 31.7778 24.0066C31.7778 21.6037 30.7844 19.4313 29.1744 17.8558C28.9661 17.6519 28.8491 17.3754 28.8491 17.0871C28.8491 16.7987 28.9661 16.5222 29.1744 16.3183ZM26.0311 19.3932C26.1343 19.2921 26.2568 19.2119 26.3917 19.1572C26.5266 19.1025 26.6712 19.0743 26.8172 19.0743C26.9632 19.0743 27.1078 19.1025 27.2427 19.1572C27.3776 19.2119 27.5001 19.2921 27.6033 19.3932C28.2232 19.9985 28.7148 20.7176 29.0498 21.5093C29.3848 22.301 29.5567 23.1497 29.5556 24.0066C29.5566 24.8635 29.3847 25.7121 29.0497 26.5038C28.7147 27.2955 28.2232 28.0146 27.6033 28.6199C27.3948 28.824 27.1121 28.9386 26.8172 28.9386C26.5224 28.9386 26.2396 28.824 26.0311 28.6199C25.8226 28.4159 25.7055 28.1392 25.7055 27.8507C25.7055 27.5621 25.8226 27.2854 26.0311 27.0814C26.4446 26.6782 26.7726 26.199 26.9961 25.6713C27.2196 25.1436 27.3342 24.5778 27.3333 24.0066C27.3342 23.4353 27.2196 22.8695 26.9962 22.3418C26.7727 21.8141 26.4447 21.3349 26.0311 20.9317C25.9278 20.8307 25.8458 20.7108 25.7899 20.5788C25.734 20.4468 25.7052 20.3053 25.7052 20.1625C25.7052 20.0196 25.734 19.8781 25.7899 19.7461C25.8458 19.6141 25.9278 19.4942 26.0311 19.3932Z'
							fill='white'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Player;
