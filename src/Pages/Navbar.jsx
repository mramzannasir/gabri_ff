/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);
	const onclick = () => {
		setOpen(!open);
	};

	return (
		<>
			<div className="contain pt-2">
				<div className=" flex  h-[5rem] w-[100%] items-center justify-center">
					{open ? (
						<div className="absolute top-0 left-0 h-full w-full bg-[#00000067] md:hidden"></div>
					) : (
						""
					)}
					<nav className="flex w-[100%]  items-center justify-between">
						<div className="logo">
							<img className="" src="/logo.png" />
						</div>
						{/* Close btn */}
						<div
							onClick={onclick}
							className="absolute right-3 top-[24px] z-[99] cursor-pointer text-2xl transition-all duration-500 md:hidden">
							{open ? (
								<div className="sm:hidden">
									{" "}
									<IoMdClose size={36}  color="#ffffff" />
								</div>
							) : (
								<FiMenu size={36} color="white" />
							)}
						</div>
						{/* Navbar */}
						<div
							className={`absolute top-0 z-[100] flex h-screen w-full  flex-col items-center  justify-center bg-black pt-8 text-[14px] font-normal leading-[180%] md:static md:h-auto md:flex-row md:items-center md:pt-0 
						${
							open ? "left-0" : "left-[-1080px]"
						}  ease left-0 z-[99] h-full w-full gap-8 font-normal transition-all duration-[800ms] sm:w-[60%] md:w-auto  md:gap-6 md:bg-inherit xl:gap-8`}>
							<div
								onClick={onclick}
								className="absolute right-1 top-5 z-[99] cursor-pointer text-2xl transition-all duration-500 md:hidden">
								{open ? <IoMdClose size={36}  color="#ffffff" /> : ""}
							</div>
							<div className="text-base text-white">About us</div>
							<div className="text-base text-white">Contact us</div>
							<div className="hidden md:block">
								<button>Book a Demo</button>
							</div>
						</div>
						{/* Cart */}
						
					</nav>
				</div>
			</div>
		</>
	);
};
export default Navbar;
