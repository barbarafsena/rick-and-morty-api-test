import axios from 'axios';

interface Info {
    count: number;      
    pages: number;      
    next: string | null; 
    prev: string | null; 
}

interface ApiData {
    info: Info;
    results: Character[];
} 

export interface Character {
    id: number;
    name: string,
    gender: string,
    species: string,
    status: string,
    image: string
}

export const fetchCharacters = async (parameter: string): Promise<ApiData> => {
    const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?${parameter}`
    );
    return response.data;
}