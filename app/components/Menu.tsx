"use client"
import Link from "next/link"

interface subItems {
    itsTitle: boolean,
    nameDisplaySubItem: string,
    slug: string
}

interface itemMenu {
    title: string
    nameDisplay: string
    slug: string
    itsSubItems: boolean
    subItems: subItems[]
}

const menuItems: itemMenu[] = [
    {
        title: "Máquinas Metal",
        nameDisplay: "Máquinas Indústria Metal Mecânica",
        slug: "/maquinas-metal",
        itsSubItems: true,
        subItems: [
            {
                itsTitle: true,
                nameDisplaySubItem: "Máquinas Indústria Metal Mecânica",
                slug: "/maquinas-metal"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Chapas",
                slug: "/maquinas-metal/calandras-de-chapa"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Tubos e Perfis",
                slug: "/maquinas-metal/calandras-de-tubos-e-perfis"
            }
        ]
    },
    {
        title: "Máquinas Papel",
        nameDisplay: "Máquinas Indústria Grafica e Embalagem",
        slug: "/maquinas-metal",
        itsSubItems: true,
        subItems: [
            {
                itsTitle: true,
                nameDisplaySubItem: "Máquinas Indústria Metal Mecânica",
                slug: "/maquinas-metal"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Chapas",
                slug: "/maquinas-metal/calandras-de-chapa"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Tubos e Perfis",
                slug: "/maquinas-metal/calandras-de-tubos-e-perfis"
            }
        ]
    },
    {
        title: "Máquinas Papel",
        nameDisplay: "Máquinas Indústria Grafica e Embalagem",
        slug: "/maquinas-metal",
        itsSubItems: true,
        subItems: [
            {
                itsTitle: true,
                nameDisplaySubItem: "Máquinas Indústria Metal Mecânica",
                slug: "/maquinas-metal"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Chapas",
                slug: "/maquinas-metal/calandras-de-chapa"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Tubos e Perfis",
                slug: "/maquinas-metal/calandras-de-tubos-e-perfis"
            }
        ]
    },
    {
        title: "Máquinas Papel",
        nameDisplay: "Máquinas Indústria Grafica e Embalagem",
        slug: "/maquinas-metal",
        itsSubItems: true,
        subItems: [
            {
                itsTitle: true,
                nameDisplaySubItem: "Máquinas Indústria Metal Mecânica",
                slug: "/maquinas-metal"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Chapas",
                slug: "/maquinas-metal/calandras-de-chapa"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Tubos e Perfis",
                slug: "/maquinas-metal/calandras-de-tubos-e-perfis"
            }
        ]
    },
    {
        title: "Máquinas Papel",
        nameDisplay: "Máquinas Indústria Grafica e Embalagem",
        slug: "/maquinas-metal",
        itsSubItems: true,
        subItems: [
            {
                itsTitle: true,
                nameDisplaySubItem: "Máquinas Indústria Metal Mecânica",
                slug: "/maquinas-metal"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Chapas",
                slug: "/maquinas-metal/calandras-de-chapa"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Tubos e Perfis",
                slug: "/maquinas-metal/calandras-de-tubos-e-perfis"
            }
        ]
    },
    {
        title: "Máquinas Papel",
        nameDisplay: "Máquinas Indústria Grafica e Embalagem",
        slug: "/maquinas-metal",
        itsSubItems: true,
        subItems: [
            {
                itsTitle: true,
                nameDisplaySubItem: "Máquinas Indústria Metal Mecânica",
                slug: "/maquinas-metal"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Chapas",
                slug: "/maquinas-metal/calandras-de-chapa"
            },
            {
                itsTitle: false,
                nameDisplaySubItem: "Calandras de Tubos e Perfis",
                slug: "/maquinas-metal/calandras-de-tubos-e-perfis"
            }
        ]
    }
]

const Menu = () => {


    return (
        <menu className="bg-bgPreHeader">
            <div className="container mx-auto flex py-6 w-full gap-5 justify-between">
                {
                    menuItems.map((item, index) => (
                        <li key={index} className="relative menu-item">
                            <Link
                                href={item.slug}
                                className="text-menuColor font-bold text-[0.9em] menu-link"
                            >
                                {item.title}
                            </Link>
                            {
                                item.itsSubItems ?
                                    <ul className="submenu absolute top-5 bg-white p-10 rounded-[40px] w-fit max-w-full min-w-[400px] left-0">
                                        {item.subItems.map((subItem, index) => (
                                            <li className={subItem.itsTitle ? "font-semibold text-colorMenuItem" : "font-normal text-colorMenuItem"} key={index}>
                                                <Link
                                                    href={subItem.slug}
                                                >
                                                    {subItem.nameDisplaySubItem}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                : <></>
                            }
                        </li>
                    ))
                }
            </div>
        </menu>
    )
}

export default Menu;