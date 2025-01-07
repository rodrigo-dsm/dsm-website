import Image from "next/image"
import Link from "next/link";

const Services = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto py-16">
                <ul className="flex items-center justify-between gap-4">
                    <li className="border-2 border-[#ccc] rounded-2xl">
                        <Link
                            href={"/"}
                        >
                            <h3 className="font-bold text-black mx-5 pt-2 text-xl">Clientes</h3>
                            <Image
                                src={"https://www.dsm.com.br/cssDSM/img/apertomaos.png"}
                                alt="Robôs Industriais"
                                width={600}
                                height={455}
                            />
                        </Link>
                    </li>
                    <li className="border-2 border-[#ccc] rounded-2xl">
                        <Link
                            href={"/"}
                        >
                            <h3 className="font-bold text-black mx-5 pt-2 text-xl">Serviços e peças</h3>
                            <Image
                                src={"https://www.dsm.com.br/cssDSM/img/rapaz-ferramentas.png"}
                                alt="Dobradeira de Tubos CNS 13 Eixos Servo Full Eletric Serie EMR"
                                width={600}
                                height={455}
                            />
                        </Link>
                    </li>
                    <li className="border-2 border-[#ccc] rounded-2xl">
                        <Link
                            href={"/"}
                        >
                            <h3 className="font-bold text-black mx-5 pt-2 text-xl">Contato</h3>
                            <Image
                                src={"https://www.dsm.com.br/cssDSM/img/moca.png"}
                                alt="Dobradeira de Chapas CNC Servo Hidráulica Série WAD"
                                width={600}
                                height={455}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Services;