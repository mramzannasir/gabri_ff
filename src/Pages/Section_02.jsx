import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section_02 = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<div className="wrapper mt-[300px] text-white md:mt-[400px]">
				<div className="flex w-full flex-col items-center gap-12 lg:flex-row">
					<div className="a w-full pt-[35px] md:pt-[67px] lg:w-[50%] lg:rounded-r-[30px]">
						<img
							data-aos="fade-left"
							// data-aos-anchor="#example-anchor"
							// data-aos-offset="1500"
							// data-aos-duration="1500"
							src="/phone.png"
							className="mx-auto"
							alt=""
						/>
					</div>
					<div data-aos="zoom-out" className="w-full lg:w-[50%]">
						<div data-aos="zoom-out"  className="w-full md:pl-4 lg:w-[70%] lg:pl-0">
							<h1 className="heading text-center md:text-left ">
								Headline for Abiu Product
							</h1>
							<p className="des text-center  opacity-60 md:text-left ">
								Lorem ipsum dolor sit amet consectetur. Tristique lectus
								volutpat enim eu condimentum risus odio. Lectus vitae egestas
								egestas est ornare varius cras faucibus.
							</p>
							<p className="des mt-3 text-center opacity-60 md:text-left ">
								Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac
								felis egestas dignissim habitant fringilla. Nulla dapibus
								fermentum egestas vitae turpis tempus at bibendum velit.
								Ultricies eget.
							</p>
						</div>
						<div className="mt-4 flex w-full justify-center  gap-4 md:justify-start md:pl-4 lg:pl-0">
							<button>Book a Demo</button>
							<img src="/btn.png" className="cursor-pointer" alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section_02;
