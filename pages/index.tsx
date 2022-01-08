import React from "react";
import Layout from "../src/layout";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Autoplay} from "swiper";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

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
	SwiperCore.use([Pagination, Autoplay]);
	return (
		<Layout>
			<div className="slider-content">
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
					pagination={{
						clickable: true,
					}}
					loop={true}
					autoplay={{delay: 5000, disableOnInteraction: true}}
				>
					{slideImages.map((image) => {
						return (
							<SwiperSlide className="swiper-slide">
								<img
									src={image.url}
									alt={image.caption}
									className="swiper-image"
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className="title-content swiper-top-layer">
					<div className="layer-text">
						Find a place you'll love to live
					</div>
					<div className="layer-form search">
						<div className="filter-box">
							<div className="filter-list">
								<div className="filter-items active">Buy</div>
								<div className="filter-items">Rent</div>
								<div className="filter-items">Short-let</div>
							</div>
						</div>
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
									placeholder="Search for City, Neighbourhood..."
								/>
								<button
									role="search"
									className="search-btn"
									id="search-trigger"
								>
									<SearchRoundedIcon fontSize="medium" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
