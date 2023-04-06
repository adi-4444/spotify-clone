import React from "react";
import "./navloading.css";
import Skeleton from "react-loading-skeleton";

const NavLoading = () => {
	return (
		<div className='nav-loading'>
			<Skeleton height={30} width={90} borderRadius={"8rem"} />
			<Skeleton height={30} width={110} borderRadius={"8rem"} />
			<Skeleton height={30} width={120} borderRadius={"8rem"} />
			<Skeleton height={30} width={160} borderRadius={"8rem"} />
		</div>
	);
};

export default NavLoading;
