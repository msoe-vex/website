import Image from "next/image";
import FancyDiv from "../styled_components/FancyDiv";
import Hr from "../styled_components/Hr";
import H3 from "../styled_components/H3";

export default function Program({title, img, about}) {
    return (
        <FancyDiv>
                <H3 title={title}/>
                <Hr/>
                <Image src={img} className="unstretched object-contain" alt={title}/>
                <Hr/>
                <p className="text-lg">{about}</p>
        </FancyDiv>
    );
}