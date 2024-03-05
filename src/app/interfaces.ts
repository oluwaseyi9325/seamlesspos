export interface Product {
    id: string;
    name: string;
    description: string;
    overviews: string[];
    warranty: string;
    price: string;
    image: string[];
    category: string;
    reviews: Review[];
}

export interface Review {
    id: string;
    reviewsMessage: string;
    rate: number;
    userId: string;
    createdAt: string;
}
