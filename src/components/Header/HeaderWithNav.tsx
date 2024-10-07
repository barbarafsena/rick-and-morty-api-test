import { Link } from "react-router-dom";

const HeaderWithNav = () => {
    return (

        <div className="flex flex-wrap sm:justify-between justify-center items-center pt-8 p-16 w-full">
            <img
                src="./header-logo.png"
                alt="Logo do Rick and Morty"
                className="w-80 h-24 lg:w-96 lg:h-32 hover:scale-110 transition-transform duration-300"
            />
            <div>
                <nav>
                    <ul className="flex gap-8">
                        <Link to="/home">
                            <li className="text-white hover:font-bold">Início</li>
                        </Link>
                        <Link to="/characters">
                            <li className="text-white hover:font-bold">Personagens</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HeaderWithNav;