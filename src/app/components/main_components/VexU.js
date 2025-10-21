import Image from "next/image";
import RAIDER_ROBOTICS from "../../assets/vexU/Raider_Robotics.png"
import FancyDiv from "../styled_components/FancyDiv";
import Hr from "../styled_components/Hr";
import H3 from "../styled_components/H3";

export default function VexU() {
    return (
        <FancyDiv id="vex-u" extra_classes="w-full lg:w-[80%] mx-[auto]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                <div>
                    <H3 title="Raider Robotics"/>
                    <Hr/>
                    <p className="max-w-[500px] mx-[auto]">
                        One of our project teams is the Raider Robotics VEX U team, providing students a way to put their skills to the test with competitive robotics. In VEX U, students work with the team to design, develop, test, and compete with multiple robots against other collegiate teams. This team works year-long to design and program two collaborative robots to compete in a yearly game, provided to us by VEX Robotics. These robots are required to both operate completely autonomously, as well as operating with human drivers during a competition match.
                    </p>
                    <Hr/>
                </div>
                <Image src={RAIDER_ROBOTICS}  className="unstretched max-w-[500px] mx-[auto] object-contain p-1" alt="Raider Robotics"/>
            </div>
        </FancyDiv>
    );
}