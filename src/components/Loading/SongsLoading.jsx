import React from "react";
import "./songslistloader.css";
import Skeleton from "react-loading-skeleton";

const SongsLoading = () => {
	return (
		<div className='songslist-loader'>
			{Array(8)
				.fill(0)
				.map((_, id) => (
					<div
						key={id}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "0px 40px",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "8px",
							}}
						>
							<Skeleton
								circle
								height={55}
								width={55}
								borderRadius={"8rem"}
							/>
							<div>
								<Skeleton
									height={26}
									width={200}
									borderRadius={"8rem"}
								/>
								<Skeleton
									height={20}
									width={150}
									borderRadius={"8rem"}
								/>
							</div>
						</div>
						<Skeleton
							height={20}
							width={50}
							borderRadius={"8rem"}
						/>
					</div>
				))}
		</div>
	);
};

export default SongsLoading;
