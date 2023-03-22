import React from "react";
import Navbar from "./Navbar";

const Banner = () => {
	return (
		<>
			<div className="wrapper">
				<div className="contain flex-col">
					<Navbar />
					<div className="contain mt-[10rem] flex-col text-white md:mt-[15rem] xl:mt-[18rem]">
						<div className="w-full lg:w-[60%] xl:w-[50%]">
							<h1 className="heading text-center font-semibold md:text-left ">
								Easy way to lower your energy cost. Climate action at your
								fingertips.
							</h1>
							<p className="des my-3 text-center  opacity-70 md:text-left">
								Join our eco-conscious community and reduce your energy usage
								when it is most needed.
							</p>
							<button className="mx-auto md:mx-0">Book a Demo</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
