const Newsletter = () => {

    return (
        <section className="bg-[#E8E8E9] py-8 mb-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/4">
                    <h3 className="text-black text-2xl">Newsletter</h3>
                    <p className="text-black">Cadastre-se e receba nossas novidades!</p>
                </div>
                <div className="flex w-3/4 gap-2 justify-end">
                    <input className="shadow appearance-none border rounded w-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nome" />
                    <input className="shadow appearance-none border rounded w-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="E-mail" />
                    <input className="shadow appearance-none border border-black rounded w-20 py-2 px-3 text-black font-bold cursor-pointer leading-tight focus:outline-none focus:shadow-outline" type="button" value="Enviar" />
                </div>
            </div>
        </section>
    )
}

export default Newsletter;