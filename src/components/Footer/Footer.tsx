import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-row justify-evenly items-center overflow-hidden gap-16 p-4">
            <Link to="/home">
                <img
                    className="w-24 h-10 md:w-44 md:h-20 hover:scale-110 transition-transform duration-300"
                    src="./inicio.png"
                />
            </Link>

            <Link to="/characters">
                <img
                    className="w-48 h-16 md:w-60 md:h-24 hover:scale-110 transition-transform duration-300"
                    src="./personagens.png"
                />
            </Link>
        </div>
    )
}

export default Footer;