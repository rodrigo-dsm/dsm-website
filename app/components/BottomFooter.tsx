import Image from "next/image";

const BottomFooter = () => {
    return (
        <div className="bg-black py-10">
            <div className="all rapidos container mx-auto">
                <div className="grid grid-cols-4 grid-rows-1 gap-4">
                    <div className="col_2 column">
                        <h5 className="text-2xl font-bold">Links Rápidos</h5>
                        <ul>
                            <li className="first"><a href="https://www.dsm.com.br/">Home</a></li>
                            <li><a href="https://www.dsm.com.br/sobre-nos">Sobre Nós</a></li>
                            <li><a href="https://www.dsm.com.br/clientes">Clientes</a></li>
                            <li><a href="https://www.dsm.com.br/orcamentos">Orçamentos</a></li>
                            <li><a href="https://www.dsm.com.br/servicos-e-pecas">Serviços e Peças</a></li>
                            <li><a href="https://www.dsm.com.br/trabalhe-conosco">Trabalhe Conosco</a></li>
                            <li><a href="https://www.dsm.com.br/politica-e-privacidade">Privacidade</a></li>
                            <li className="last"><a href="https://www.dsm.com.br/contato">Contato</a></li>
                        </ul>
                    </div>
                    
                    <div className="col_3 column">
                        <Image src="https://www.dsm.com.br/cssDSM/img/dsm-rodape-escritorio.jpg" alt="" />
                        <ul>
                            <li className="first">DSM MÁQUINAS LTDA</li>
                            <li>CNPJ 72.859.283/0001-32</li>
                            <li className="last">
                                <a href="https://maps.app.goo.gl/DzsDuHZCyApikYbT9" target="_blank">
                                    Rua Serra de Botucatu, 660
                                    <br />
                                    Tatuapé - São Paulo - SP<br />
                                    Brasil - CEP 03317-000
                                </a>
                            </li>
                        </ul>
                    </div>	
                    
                    <div className="col_3 column">
                        <Image src="https://www.dsm.com.br/cssDSM/img/dsm-rodape-show.jpg" alt="" />
                        <ul>
                            <li className="first">DSM COMÉRCIO LTDA</li>
                            <li>CNPJ 24.365.774/0001-84</li>
                            <li className="last">
                                <a href="https://maps.app.goo.gl/JAWW9e1siMu9TN6u5" target="_blank">
                                    Rua Ipanema, 116<br />
                                    Mooca - São Paulo - SP<br />
                                    Brasil - CEP 03164-200
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col_3 column">
                        <ul>
                            <h5 className="text-2xl font-bold" >Atendimento</h5>
                            <li>Tel: +55 (11) 5090-6500</li>
                            <li>E-mail: <a href="mailto:info@dsm.com.br" target="blank">info@dsm.com.br</a></li>
                            <li className="last">De segunda a sexta, das 9h às 18h (UTC-3)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter;