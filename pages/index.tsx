import React from "react";
import Layout from "../src/layout";
//@ts-ignore
import {Slide} from "react-slideshow-image";

const slideImages = [
	{
		url: "/images/slideimages/basebackground1.jpeg",
		caption: "Slide 1",
	},
	{
		url: "/images/slideimages/basebackground2.jpg",
		caption: "Slide 2",
	},
	{
		url: "/images/slideimages/basebackground3.jpeg",
		caption: "Slide 3",
	},
];

function Home() {
	return (
		<Layout>
			<div className="slider-content">
				<div className="base-background">
					<div className="background-image slider-background-image">
						<div className="slide-container">
							<Slide>
								{slideImages.map((slideImage, index) => (
									<div className="each-slide" key={index}>
										<div
											style={{
												backgroundImage: `url(${slideImage.url})`,
											}}
										>
											<span>{slideImage.caption}</span>
										</div>
									</div>
								))}
							</Slide>
						</div>
					</div>
				</div>
				<div className="title-content slider-images-top-layer">
					<div className="layer-text"></div>
					<div className="layer-form search">
						<form
							action="#"
							className="form-group searchbox"
							role="searchbox"
						>
							<div className="form-control">
								<input
									type="text"
									className="text-control inputbox"
									role="searchbox"
									autoComplete="new-search"
								/>
								<button
									role="search"
									className="search-btn"
									id="search-trigger"
								></button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
