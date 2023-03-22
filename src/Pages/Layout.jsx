import React from "react";
import Banner from "./Banner";
import Chose from "./Chose";
import Contact from "./Contact";
import Footer from "./Footer";
import Section_02 from "./Section_02";
import Section_03 from "./Section_03";

const Layout = () => {
	return (
		<>
			<main className="h-full w-full bg-[url(/bg.png)] bg-cover bg-center bg-no-repeat md:bg-[length:100%_100%]">
				<div className=" flex flex-col w-full overflow-hidden">
					<Banner />
					<Section_02 />
					<Section_03/>
					<Chose/>
					<Contact/>
					<Footer/>
				</div>
			</main>
		</>
	);
};

export default Layout;
