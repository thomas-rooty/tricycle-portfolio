import React from "react";

const Loadinpage = () => {
	return (
		<div className="loading-page">
			<div className="loading-page__content">
				<div className="loading-page__content__logo">
					<img src="/images/logo.png" alt="logo" />
				</div>
				<div className="loading-page__content__text">
					<p>Loading...</p>
				</div>
			</div>
		</div>
	);
}

export default Loadinpage;