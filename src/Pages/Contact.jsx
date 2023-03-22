import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";


const Contact = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<div className="wrapper my-[150px] text-white">
				<div className="contain  flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
					<div className="w-full lg:w-[48%]">
						<h1 className="heading">Contact</h1>
						<div className="mt-4 flex w-full flex-col gap-4">
							<input
								type="text"
								name=""
								id=""
								placeholder="Name"
								className="f h-[50px] pl-4 text-white text-opacity-40 outline-none placeholder:text-white placeholder:opacity-40"
							/>
							<input
								type="email"
								name=""
								id=""
								placeholder="Email"
								className="f h-[50px] pl-4 text-white text-opacity-40 outline-none placeholder:text-white placeholder:opacity-40"
							/>
							<textarea
								cols="30"
								rows="4"
								placeholder="Enter inquiry..."
								className="f  p-4 text-white text-opacity-40 outline-none placeholder:text-white placeholder:opacity-40"></textarea>
							<button>Submit</button>
						</div>
					</div>
					<div className="w-full lg:w-[48%]">
						<img
							
							data-aos="zoom-out-in"
							src="/earth.png"
							alt=""
						/>
					</div>
				</div>
				<div className="contain g  mt-[100px]   flex-col items-center justify-center py-8 md:flex-row md:justify-end">
					<div className="w-full md:w-[48%]">
						<motion.img
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.4 }}
							src="/plane.png"
							className="mx-auto mt-[-6rem] md:mx-0 lg:mt-[-10rem]"
							alt=""
						/>
					</div>
					<div className=" w-full md:w-[48%]">
						<h1 className="heading text-center md:text-left">
							Get Started Today
						</h1>
						<button className="mx-auto mt-4 bg-white md:mx-0">
							Book a Demo
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;
