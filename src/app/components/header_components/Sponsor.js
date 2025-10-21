import Image from "next/image"

export const MIN_SPONSOR_WIDTH = 10;

export default function Sponsor({img, alt, link, additional_style=""}) {
    return (
        <div
            className={`max-h-32 h-32 flex justify-center items-center mx-16 flex-shrink-0`}
            style={{ minWidth: `${MIN_SPONSOR_WIDTH}vw` }}
        >
            <a href={link}>
                <div className={additional_style}>
                    <Image src={img} className="max-h-32 unstretched object-contain p-1" alt={alt}/>
                </div>
            </a>
        </div>
    );
}