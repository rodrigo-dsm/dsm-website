import Link from "next/link";
import Image from "next/image";
import phoneIcon from "@/public/icons/phone-svgrepo-com (1).svg"
import mailIcon from "@/public/icons/mail-svgrepo-com.svg"
import whatsappIcon from "@/public/icons/whatsapp-svgrepo-com (1).svg"
import locationIcon from "@/public/icons/location-map-navigation-svgrepo-com.svg"

const PreHeader = () => {

    return (
        <section className="bg-bgPreHeader py-4">
            <div className="flex container justify-between mx-auto items-center">
                <div className="w-3/12">
                    <Link 
                        href={"/orcamentos"}
                        title="Botão para orçamentos"
                        className="bg-[#CBCBCB] text-white border border-[#8A8A8A] py-1 px-4 rounded-lg font-bold text-base uppercase font-sans hover:bg-[#8A8A8A] transition"
                    >
                        Solicitar orçamento
                    </Link>
                </div>
                <div className="flex w-4/6">
                    <ul className="flex gap-4 w-full justify-between">
                        <li className="flex items-center gap-1">
                            <Image 
                                src={phoneIcon}
                                alt="Link Telefone"
                                width={25}
                                height={25}
                                className="boder border-black rounded-full"
                            />
                            <Link
                                href={"tel:+551150906500"}
                                target="_blank"
                                className="font-bold text-black font-sans"
                            >
                                +55 (11) 5090-6500
                            </Link>
                        </li>
                        <li className="flex items-center gap-1">
                            <Image 
                                src={mailIcon}
                                alt="Link E-mail"
                                width={25}
                                height={25}
                                className="boder border-black rounded-full"
                            />
                            <Link
                                href={"mailto:info@dsm.com.br"}
                                target="_blank"
                                className="font-bold text-black font-sans"
                            >
                                info@dsm.com.br
                            </Link>
                        </li>
                        <li className="flex items-center gap-1">
                            <Image 
                                src={whatsappIcon}
                                alt="Link Whatsapp"
                                width={25}
                                height={25}
                                className="boder border-black rounded-full"
                            />
                            <Link
                                href={"https://api.whatsapp.com/send?phone=5511914117932"}
                                target="_blank"
                                className="font-bold text-black font-sans"
                            >
                                +55 (11) 91411-7932
                            </Link>
                        </li>
                        <li className="flex items-center gap-1">
                            <Image 
                                src={locationIcon}
                                alt="Link Localização"
                                width={25}
                                height={25}
                                className="boder border-black rounded-full"
                            />
                            <Link
                                href={"https://maps.app.goo.gl/DzsDuHZCyApikYbT9"}
                                target="_blank"
                                className="font-bold text-black font-sans"
                            >
                                São Paulo - SP - Brasil
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default PreHeader;