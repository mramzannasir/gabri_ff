import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section_03 = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<div className="wrapper my-[100px] text-white md:my-[220px]">
				<div className="contain items-center justify-center">
					<div data-aos="zoom-out"  className="w-full md:w-[90%] lg:w-[65%]">
						<h1 className="heading text-center">Headline for Solutions</h1>
						<p className="des text-center opacity-60">
							Lorem ipsum dolor sit amet consectetur. Augue ac aenean tempor
							pharetra sed luctus aliquet pharetra. In tincidunt gravida eu
							scelerisque velit in.
						</p>
					</div>
				</div>
				<div className="contain relative flex-col items-center justify-center">
					<div className="mt-[70px] md:mt-[150px] flex w-full flex-col items-center gap-14 lg:flex-row lg:justify-between lg:gap-0">
						<div className="w-full lg:w-[40%]">
							<h1 className="title text-center font-semibold md:text-left">
								Energy Efficiency
							</h1>
							<p className="des mt-4 text-center opacity-60 md:text-left">
								Lorem ipsum dolor sit amet consectetur. Tristique lectus
								volutpat enim eu condimentum risus odio. Lectus vitae egestas
								egestas est ornare varius cras faucibus. <br />{" "}
								<br className="hidden lg:block" />
								Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac
								felis egestas dignissim habitant fringilla. Nulla dapibus
								fermentum egestas vitae turpis tempus at bibendum velit.
								Ultricies eget.
							</p>
						</div>
						<div data-aos="zoom-in-down" className="b  relative h-[350px] w-full lg:w-[40%]">
							<img
								src="/lamp.png"
								className="absolute top-[5%] left-[50%] translate-y-[10%] translate-x-[-50%] md:top-[-5rem]"
								alt=""
							/>
						</div>
					</div>
					<div className="mt-[150px] flex w-full flex-col-reverse items-center gap-14 lg:flex-row lg:justify-between lg:gap-0">
						<div data-aos="zoom-in-down" className="b  relative h-[350px] w-full lg:w-[40%]">
							<img
								src="/pin.png"
								className="absolute top-[5%] left-[50%] translate-y-[10%] translate-x-[-50%] md:top-[-5rem]"
								alt=""
							/>
						</div>
						<div className="w-full lg:w-[40%]">
							<h1 className="title text-center font-semibold md:text-left">
								Supply chain
							</h1>
							<p  className="des  mt-4 text-center opacity-60 md:text-left">
								Lorem ipsum dolor sit amet consectetur. Tristique lectus
								volutpat enim eu condimentum risus odio. Lectus vitae egestas
								egestas est ornare varius cras faucibus.
								<br /> <br className="hidden lg:block" />
								Lorem ipsum dolor sit amet consectetur. Tristique lectus
								volutpat enim eu condimentum risus odio. Lectus vitae egestas
								egestas est ornare varius cras faucibus.
							</p>
						</div>
					</div>
					<div className="mt-[150px] flex w-full flex-col items-center gap-14 lg:flex-row lg:justify-between lg:gap-0">
						<div className="w-full lg:w-[40%]">
							<h1 className="title text-center font-semibold md:text-left">
								Finance
							</h1>
							<p className="des mt-4 text-center opacity-60 md:text-left">
								Lorem ipsum dolor sit amet consectetur. Tristique lectus
								volutpat enim eu condimentum risus odio. Lectus vitae egestas
								egestas est ornare varius cras faucibus.
								<br /> <br className="hidden lg:block" />
								Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac
								felis egestas dignissim habitant fringilla. Nulla dapibus
								fermentum egestas vitae turpis tempus at bibendum velit.
								Ultricies eget.
							</p>
						</div>
						<div data-aos="zoom-in-down" className="b  relative h-[350px] w-full lg:w-[40%]">
							<img
								src="/wallet.png"
								className="absolute top-[5%] left-[50%] translate-y-[25%] translate-x-[-50%] md:top-[-5rem]"
								alt=""
							/>
						</div>
					</div>
					<div className="absolute hidden lg:block left-[50%] h-[1000px] w-[1px] translate-x-[-50%] border-[2px] border-dotted border-[#3C4349]">
						<div className="relative h-full w-full">
							<div className="c absolute top-[-1rem] flex items-center left-[-2.2rem] justify-center rounded-full">
								<div data-aos="zoom-in-down" className=" h-[33px] w-[33px] rounded-full bg-green"></div>
							</div>
							<div className="c absolute flex top-[50%] left-[-2.2rem] items-center justify-center rounded-full">
								<div  data-aos="zoom-in-down" className=" h-[33px] w-[33px] rounded-full bg-green"></div>
							</div>
							<div className="c absolute bottom-[-1rem] flex items-center left-[-2.2rem] justify-center rounded-full">
								<div data-aos="zoom-in-down" className=" h-[33px] w-[33px] rounded-full bg-green"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section_03;
