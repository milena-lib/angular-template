import { Images } from "./show.model";

export interface Cast {
    person: Person;
}

export interface Person {
    id: number;
    name: string;
    image: Images;
}