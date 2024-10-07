import HeaderWithImage from "../../components/Header/HeaderWithImage";
import Footer from "../../components/Footer/Footer";
import BackgroundWrapper from "../../components/BackgroundWrapper/BackgroundWrapper";

const Home = () => {
    return (
        <div>
            <BackgroundWrapper bgImagePath="../../../background_home.png">
                <HeaderWithImage />
                <img
                    src="../../../spaceship.png"
                    alt="Imagem de uma nave espacial"
                    className="w-96 md:w-[420px] lg:w-[580px] m-auto"
                />
                <Footer />
            </BackgroundWrapper>
        </div>

    )
}

export default Home;
