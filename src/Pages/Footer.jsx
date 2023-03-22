import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
	return (
		<>
			<div className="wrapper  text-white">
				<div className="contain">
					<div className="h-[3px] w-full bg-white opacity-5">&nbsp;</div>
				</div>
				<div className="contain my-6 flex-col md:flex-row  gap-8 md:gap-0 md:items-center md:justify-between">
					<div>
						<img src="/logo.png" alt="" />
					</div>
					<div className="flex gap-4">
						<p className="des">About us</p>
						<p className="des">Contact us</p>
					</div>
					<div className="flex gap-4">
						<BsFacebook size={20} className="cursor-pointer" color="white" />
						<AiOutlineTwitter
							size={22}
							className="cursor-pointer"
							color="white"
						/>
						<IoLogoLinkedin
							size={20}
							className="cursor-pointer"
							color="white"
						/>
					</div>
				</div>
				<div className="wrapper mt-6 bg-[#01101B] ">
					<div className="contain h-[90px] justify-center items-center">
						<p className="text-center des opacity-40">ABIU.AI   345 6th street San Francisco, CA</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
