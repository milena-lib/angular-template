import { Images } from "./movie.model";

export interface Cast {
    person: Person;
}

export interface Person {
    id: number;
    name: string;
    image: Images;
}