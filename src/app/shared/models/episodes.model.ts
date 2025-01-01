import { Rating } from "./show.model";

export interface Episode {
    id: number;
    name: string;
    number: number;
    rating: Rating;
    airdate: string;
}