export interface Movie {
    show: Show;
}

export interface Show {
    id: number;
    name: string;
    rating: Rating;
    image: Images;
    summary: string;
}

export interface Rating {
    average: number;
}

export interface Images {
    medium: string;
    original: string;
}

