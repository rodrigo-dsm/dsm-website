"use client"
import { useState } from "react";
import Image from "next/image";

const Highlights = () => {

    const [ robosActive, setRobosActive ] = useState(true);
    const [ dobraActive, setDobraActive ] = useState(false);
    const [ prensasActive, setPrensasActive ] = useState(false);
    const [ tubosActive, setTubosActive ] = useState(false);

    return (
        <section 
            className={`${robosActive ? 'bg-[#e5f5ff]' : dobraActive ? 'bg-[#dfe0e1]' : prensasActive ? 'bg-[#e5f5ff]' : tubosActive ? 'bg-[#5e6ab7]' : '' } py-16`}
        >
            <div className="container mx-auto">
                <h2 className={`${tubosActive ? 'text-white' : 'text-[#333]' } text-2xl font-bold  block mb-4`}>Destaques</h2>
                <div className="flex items-center justify-between">
                    <div className="bg-white border-2 border-[#ccc] rounded-2xl">
                        <ul>
                            <li 
                                className="pt-5 pb-14 border-b border-[#333] text-[#333] my-5 mx-10 font-bold cursor-pointer"
                                onMouseEnter={() => {setRobosActive(true); setDobraActive(false); setPrensasActive(false); setTubosActive(false)}}
                            >
                                Robôs Industriais
                            </li>
                            <li
                                className="pt-5 pb-14 border-b border-[#333] text-[#333] my-5 mx-10 font-bold cursor-pointer"
                                onMouseEnter={() => {setRobosActive(false); setDobraActive(true); setPrensasActive(false); setTubosActive(false)}}
                            >
                                Dobradeira de Tubos CNS 13 Eixos Servo Full Eletric Serie EMR
                            </li>
                            <li
                                className="pt-5 pb-14 border-b border-[#333] text-[#333] my-5 mx-10 font-bold cursor-pointer"
                                onMouseEnter={() => {setRobosActive(false); setDobraActive(false); setPrensasActive(true); setTubosActive(false)}}
                            >
                                Dobradeira de Chapas CNC Servo Hidráulica Série WAD
                            </li>
                            <li
                                className="pt-5 pb-14 border-b border-[#333] text-[#333] my-5 mx-10 font-bold cursor-pointer"
                                onMouseEnter={() => {setRobosActive(false); setDobraActive(false); setPrensasActive(false); setTubosActive(true)}}
                            >
                                Prensas Metaleiras Hidráulica para Chapas e Perfis Série HKM
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={robosActive ? 'visible' : 'hidden'}>
                                <Image
                                    src={"https://www.dsm.com.br/cssDSM/img/destaque-serie-robo.png"}
                                    alt="Robôs Industriais"
                                    width={600}
                                    height={455}
                                />
                            </li>
                            <li className={dobraActive ? 'visible' : 'hidden'}>
                                <Image
                                    src={"https://www.dsm.com.br/cssDSM/img/destaque-serie-emr.png"}
                                    alt="Dobradeira de Tubos CNS 13 Eixos Servo Full Eletric Serie EMR"
                                    width={600}
                                    height={455}
                                />
                            </li>
                            <li className={prensasActive ? 'visible' : 'hidden'}>
                                <Image
                                    src={"https://www.dsm.com.br/cssDSM/img/destaque-serie-wrad.png"}
                                    alt="Dobradeira de Chapas CNC Servo Hidráulica Série WAD"
                                    width={600}
                                    height={455}
                                />
                            </li>
                            <li className={tubosActive ? 'visible' : 'hidden'}>
                                <Image
                                    src={"https://www.dsm.com.br/cssDSM/img/destaque-serie-hkm.png"}
                                    alt="Prensas Metaleiras Hidráulica para Chapas e Perfis Série HKM"
                                    width={600}
                                    height={455}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;