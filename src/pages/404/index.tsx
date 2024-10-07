import BackgroundWrapper from "../../components/BackgroundWrapper/BackgroundWrapper";
import HeaderWithNav from "../../components/Header/HeaderWithNav";

const Erro404 = () => {
    return (
        <div>
            <BackgroundWrapper bgImagePath="../../../background_characters.png">
                <HeaderWithNav />
                <div className="flex items-center justify-center p-2">
                    <div className="w-[520px] flex flex-col items-center flex-wrap">
                        <h1 className="text-6xl lg:text-8xl text-white font-bold text-center">Erro 404</h1>
                        <p className="text-4xl mt-9 lg:text-5xl text-white font-medium text-center">A página que você acessou não existe.</p>
                    </div>
                    <img className=" w-40 md:w-52" src="../../../picles.png" alt="Picles" />
                </div>
            </BackgroundWrapper>
        </div>
    )
}

export default Erro404;