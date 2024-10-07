const HeaderWithImage = () => {
    return (
        <div className="flex justify-center items-center pt-8 w-full">
            <img
                src="./header-logo.png"
                alt="Logo do Rick and Morty"
                className="w-96 h-28 lg:w-96 lg:h-32 hover:scale-110 transition-transform duration-300"
            />
        </div>
    )
}

export default HeaderWithImage;