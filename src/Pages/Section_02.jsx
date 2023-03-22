import React from "react";

const Section_02 = () => {
	return (
		<>
			<div className="wrapper mt-[300px] text-white md:mt-[400px]">
				<div className="flex w-full flex-col items-center gap-12 lg:flex-row">
					<div className="a w-full pt-[35px] md:pt-[67px] lg:w-[50%] lg:rounded-r-[30px]">
						<img src="/phone.png" className="mx-auto" alt="" />
					</div>
					<div className="w-full lg:w-[50%]">
						<div className="w-full md:pl-4 lg:pl-0 lg:w-[70%]">
							<h1 className="heading text-center md:text-left ">Headline for Abiu Product</h1>
							<p className="des opacity-60  text-center md:text-left ">
								Lorem ipsum dolor sit amet consectetur. Tristique lectus
								volutpat enim eu condimentum risus odio. Lectus vitae egestas
								egestas est ornare varius cras faucibus.
							</p>
							<p className="des opacity-60 mt-3 text-center md:text-left ">
								Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac
								felis egestas dignissim habitant fringilla. Nulla dapibus
								fermentum egestas vitae turpis tempus at bibendum velit.
								Ultricies eget.
							</p>
						</div>
						<div className="flex gap-4 md:pl-4 lg:pl-0  justify-center md:justify-start mt-4 w-full">
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
