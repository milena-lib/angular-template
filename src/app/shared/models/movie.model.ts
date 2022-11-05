export interface Movie {
    show: Show;
}

export interface Show {
    id: number;
    name: string;
    rating: Rating;
    image: Images;
}

export interface Rating {
    average: number;
}

export interface Images {
    medium: string;
    original: string;
}

