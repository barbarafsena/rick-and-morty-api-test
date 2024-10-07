import BackgroundWrapper from "../../components/BackgroundWrapper/BackgroundWrapper";
import SearchBar from "../../components/SearchBar/SearchBar";
import CharactersCard from "../../components/CharactersCard/CharactersCard";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { Character, fetchCharacters } from "../../service/api";
import HeaderWithNav from "../../components/Header/HeaderWithNav";
import NoResult from "../../components/NoResult/NoResult";


const Characters: React.FC = () => {

    const [characters, setCharacters] = useState<Character[]>([])
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [filter, setFilter] = useState<string>("")


    const handleCharacters = async () => {
        try {
            const query = filter ? `name=${filter}&page=${page}` : `page=${page}`
            const data = await fetchCharacters(query);
            setCharacters(data.results);
            setTotalPages(data.info.pages)
            setError(null);

        } catch (error) {
            setError("Busca por personagens falhou.")
        }
    }


    useEffect(() => {
        handleCharacters();
    }, [page, filter])

    const handleSearch = (filter: string) => {
        setPage(1);
        setFilter(filter);
    }

    const handleNextPage = () => {
        setPage(page + 1);
    }

    const handlePreviousPage = () => {
        setPage(page - 1);
    }

    return (
        <div>
            <BackgroundWrapper bgImagePath="./background_characters.png">
                <div className="flex flex-col items-center">
                    <HeaderWithNav />
                    <SearchBar placeholder={"Digite o nome do personagem"} onSearch={handleSearch} />
                    <div className="flex gap-4 flex-wrap justify-center mt-5 w-4/5 pb-6">
                        {error ? (
                            <NoResult />
                        ) : (
                            characters.map((character) => (
                                <CharactersCard
                                    key={character.id}
                                    nome={character.name}
                                    genero={character.gender}
                                    especie={character.species}
                                    status={character.status}
                                    imagem={character.image}
                                />
                            ))
                        )}
                    </div>
                    <div className="flex gap-3 items-center justify-center">

                        {page > 1 && !error ? (
                            <Button
                                text={"Anterior"}
                                onClick={handlePreviousPage}
                            />) : ''

                        }

                        {page < totalPages && !error ? (
                            <Button
                                text={"Próximo"}
                                onClick={handleNextPage}
                            />) : ''

                        }

                    </div>
                </div>
            </BackgroundWrapper>
        </div>
    )
}

export default Characters; 