"use client";

import Image from "next/image";
import HEADER from "../../assets/MSOE_Robotics_Header.png"
import SponsorBar from "./SponsorBar"
import HeaderBackground, {set_mouse_position} from "./HeaderBackground";

export default function Header() {
    return (
        <header id="header">
            <div className="flex justify-center align-center">
                <HeaderBackground id="header-background" classes="w-full h-96"/>
                <Image src={HEADER} className="m-8 absolute" alt="MSOE Robotics" onMouseMove={set_mouse_position}/>
            </div>

            <div className="w-full h-0">
                <div className="w-[90%] sm:w-[50%] md:w-[40%] lg:w-[25%] mx-[auto] px-4 py-2 bg-zinc-900 translate-y-[-50%] rounded-md border-2 border-zinc-400">
                    <h2 className="w-full text-center text-2xl"><strong>Thank You Sponsors!</strong></h2>
                </div>
            </div>

            <div className="bg-zinc-800">
                <SponsorBar/>
            </div>
        </header>
    );
}