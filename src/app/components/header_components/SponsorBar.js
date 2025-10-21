import Sponsor from "./Sponsor";
import MSOE from "./../../assets/sponsors/MSOE.png";
import ISCFAX from "./../../assets/sponsors/ISCFAX.png";
import MILWAUKEE_TOOL from "./../../assets/sponsors/Milwaukee_Tool.png";
import FVCR from "./../../assets/sponsors/FVCR.png";
import MORE_ROBOTICS from "./../../assets/sponsors/More_Robotics.png";
import ROCKWELL from "./../../assets/sponsors/Rockwell_Automation.png";
import LAKE_AREA from "./../../assets/sponsors/Lake_Area_Insurance.png";
import POLYMATH from "./../../assets/sponsors/Polymath_Inc.png";

const sponsors = [
    <Sponsor img={MSOE} link="https://msoe.edu/" alt="MSOE" key="0"/>,
    <Sponsor img={ISCFAX} link="https://iscfax.com/" alt="ISCFAX" additional_style="bg-zinc-300 rounded-sm" key="1"/>,
    <Sponsor img={MILWAUKEE_TOOL} link="https://www.milwaukeetool.com/" alt="Milwaukee Tool" key="2"/>,
    <Sponsor img={FVCR} link="https://fvcrinc.wixsite.com/fox-valley-robotics/" alt="Fix Valley Robotics" key="3"/>,
    <Sponsor img={MORE_ROBOTICS} link="https://www.facebook.com/MORERobotics1714/" alt="More Robotics 1714" key="4"/>,
    <Sponsor img={ROCKWELL} link="https://www.rockwellautomation.com/" alt="Rockwell Automation" key="5"/>,
    <Sponsor img={LAKE_AREA} link="https://lakeareains.com/" alt="Lake Area Insurance Agency" key="6"/>,
    <Sponsor img={POLYMATH} link="http://www.polymathinc.com/" alt="Polymath Inc" key="7"/>,
];

export default function SponsorBar() {
    return (
        <div
            className="flex py-8 overflow-hidden h-48 border-t-2 border-b-2 border-zinc-300"
            style={{ minWidth: "fit-content" }}
        >
            <SponsorBarInner/>
            <SponsorBarInner/>
        </div>
    );
}

function SponsorBarInner() {
    return(
        <div
            className={`flex align-center sponsors max-h-16`}
            style={{ minWidth: "fit-content" }}
        >
            <div className="flex animate-scroll">
                {sponsors}
            </div>
        </div>
    );
}