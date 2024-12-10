import Image from "next/image";
import PreHeader from "./PreHeader";
import logoDSM from "@/public/images/logodsm.png"
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
    return (
        <header className="bg-white">
            <PreHeader />
            <div className="container mx-auto flex items-center justify-between gap-4 py-5">
                <div className="w-1/5">
                    <Image 
                        src={logoDSM}
                        alt="Logo DSM"
                        width={211}
                        height={56}
                    />

                </div>
                <div className="flex items-center gap-4 justify-center w-full">
                    <Link
                        href={"/"}
                        className="text-[#767676] transition py-1 px-2"
                    >
                        Home
                    </Link>
                    <Link
                        href={"/sobre-nos"}
                        className="text-[#767676] transition py-1 px-2"
                    >
                        Sobre Nós
                    </Link>
                    <Link
                        href={"/clientes"}
                        className="text-[#767676] transition py-1 px-2"
                    >
                        Clientes
                    </Link>
                    <Link
                        href={"/orcamentos"}
                        className="text-[#767676] transition py-1 px-2"
                    >
                        Orçamentos
                    </Link>
                    <Link
                        href={"/servicos-e-pecas"}
                        className="text-[#767676] transition py-1 px-2"
                    >
                        Serviços e Peças
                    </Link>
                    <Link
                        href={"/trabalhe-conosco"}
                        className="text-[#767676] transition py-1 px-2"
                    >
                        Trabalhe Conosco
                    </Link>
                    <Link
                        href={"/privacidade"}
                        className="text-[#767676] transition py-1 px-2"
                    >
                        Privacidade
                    </Link>
                    <Link
                        href={"/contato"}
                        className="text-[#767676] transition py-1 px-2"
                    >
                        Contato
                    </Link>
                </div>
            </div>
            <Menu />
        </header>
    )
}

export default Header;