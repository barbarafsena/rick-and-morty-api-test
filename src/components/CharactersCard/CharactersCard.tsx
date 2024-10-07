interface CharactersCardProps {
    nome: string;
    genero: string;
    especie: string;
    status: string;
    imagem: string
}

const CharactersCard: React.FC<CharactersCardProps> = ( {nome, genero, especie, status, imagem } ) => {
    return (
        <div className="flex flex-col bg-lime-400 rounded-3xl h-96 w-64 mt-6" >
            <img className="rounded-t-3xl h-32 object-cover" src={imagem} />

            <div className="flex flex-col gap-2 p-2">
                <div>
                    <h4 className="font-bold text-gray-800">Nome:</h4>
                    <p>{nome}</p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-800">Sexo:</h4>
                    <p>{genero}</p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-800">Espécie:</h4>
                    <p>{especie}</p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-800">Status:</h4>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default CharactersCard;