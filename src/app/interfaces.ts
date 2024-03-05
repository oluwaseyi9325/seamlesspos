export interface ProductInterface {
    id: string;
    name: string;
    description: string;
    overviews: string[];
    warranty: string;
    price: string;
    image: string[];
    category: string;
    reviews: ReviewInterface[];
}

export interface ReviewInterface {
    map(arg0: (review: any) => import("react").JSX.Element): import("react").ReactNode;
    id: string;
    reviewsMessage: string;
    rate: number;
    userId: string;
    createdAt: string;
}
