import FancyDiv from "../styled_components/FancyDiv";
import H3 from "../styled_components/H3";
import Hr from "../styled_components/Hr";
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function ContactUs() {
    return (
        <FancyDiv id="contact-us" extra_classes="w-full lg:w-[80%] mx-[auto]">
            <H3 title="Contact Us"/>
            <Hr/>
            <p>
                MSOE Robotics is always looking for sponsors and additional members to contribute to the success of the team. Whether you’re a MSOE student looking to join us, or a company who wants to learn more about becoming one of our sponsors, we would be thrilled to get in touch. You can contact us at <em><strong>msoerobotics@gmail.com</strong></em> or fill out this contact form with any questions or comments you have, and we’ll be in touch with you shortly!
            </p>
            <Hr/>
            <div className="flex justify-center align-center space-x-4">
                <LogoButton link="https://www.instagram.com/raider.robotics/" logo="instagram"/>
                <LogoButton link="https://github.com/msoe-vex" logo="github"/>
                <LogoButton link="https://www.msoevex.com/" logo="globe2"/>
            </div>
        </FancyDiv>
    );
}

function LogoButton({link, logo}) {
    return (
        <a href={link} className="flex justify-center align-center rounded-lg border-2 border-zinc-600 py-3 px-4">
            <i className={`bi bi-${logo}`}/>
        </a>
    )
}