import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Chose = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<div className="wrapper text-white">
				<h1 className="heading">Why Choose Abiu</h1>
				{/* Cards */}
				<div className="contain  mt-[37px]">
					<div className="grid w-full  grid-cols-1 gap-3 md:grid-cols-2 md:place-content-between lg:grid-cols-3 xl:gap-8 2xl:gap-10">
						<motion.div
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.4 }}
							data-aos="zoom-out"
							className="d h-[420px] w-full  cursor-pointer">
							<img src="/card-1.png" className="mx-auto mt-[6rem]" alt="" />
							<h1 className="my-6 text-center text-lg font-medium">
								Name of the benefit
							</h1>
							<div className="flex items-center justify-center">
								<div className="w-full sm:w-[80%]">
									<p className="des text-center opacity-60">
										Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a
										ac felis egestas dignissim habitant fringilla.{" "}
									</p>
								</div>
							</div>
						</motion.div>
						<motion.div
							data-aos="zoom-out"
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.4 }}
							className="d  h-[420px] w-full cursor-pointer">
							<img src="/card-2.png" className="mx-auto mt-[6rem]" alt="" />
							<h1 className="my-6 text-center text-lg font-medium">
								Name of the benefit
							</h1>
							<div className="flex items-center justify-center">
								<div className="w-full sm:w-[80%]">
									<p className="des text-center opacity-60">
										Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a
										ac felis egestas dignissim habitant fringilla.{" "}
									</p>
								</div>
							</div>
						</motion.div>
						<motion.div
							data-aos="zoom-out"
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.4 }}
							className="d  h-[420px] w-full cursor-pointer">
							<img src="/card-3.png" className="mx-auto mt-[6rem]" alt="" />
							<h1 className="my-6 text-center text-lg font-medium">
								Name of the benefit
							</h1>
							<div className="flex items-center justify-center">
								<div className="w-full sm:w-[80%]">
									<p className="des text-center opacity-60">
										Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a
										ac felis egestas dignissim habitant fringilla.{" "}
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
				<button className="mx-auto mt-8">Book a Demo</button>
				{/* Circles */}
				<h1 className="heading mt-[190px] text-center">Statistics Title</h1>
				<div className="contain mt-[36px]">
					<div className="flex w-full flex-wrap items-center justify-center gap-6  xl:gap-16">
						<motion.div
							data-aos="zoom-out-in"
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.4 }}
							className="e flex h-[250px] w-[250px] items-center justify-center rounded-full md:h-[300px] md:w-[300px] lg:h-[280px] lg:w-[280px] xl:h-[350px] xl:w-[350px]">
							<div className="flex flex-col gap-1">
								<div className="text-center text-[68px] font-semibold text-green md:text-[70px]">
									25k
								</div>
								<div className="text-center text-[14px] opacity-60">
									Lorem ipsum dolor sit <br /> amet consectetur.
								</div>
							</div>
						</motion.div>
						<motion.div
							data-aos="zoom-out-in"
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.4 }}
							className="e flex h-[250px] w-[250px] items-center justify-center rounded-full md:h-[300px] md:w-[300px] lg:h-[280px] lg:w-[280px] xl:h-[350px] xl:w-[350px]">
							<div className="flex flex-col gap-1">
								<div className="text-center text-[68px] font-semibold text-green md:text-[70px]">
									45k
								</div>
								<div className="text-center text-[14px] opacity-60">
									Lorem ipsum dolor sit <br /> amet consectetur.
								</div>
							</div>
						</motion.div>
						<motion.div
							data-aos="zoom-out-in"
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.4 }}
							className="e flex h-[250px] w-[250px] items-center justify-center rounded-full md:h-[300px] md:w-[300px] lg:h-[280px] lg:w-[280px] xl:h-[350px] xl:w-[350px]">
							<div className="flex flex-col gap-1">
								<div className="text-center text-[68px] font-semibold text-green md:text-[70px]">
									75k
								</div>
								<div className="text-center text-[14px] opacity-60">
									Lorem ipsum dolor sit <br /> amet consectetur.
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Chose;
