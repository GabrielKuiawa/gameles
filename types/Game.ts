export  type Game = {
    id: number;
    name: string;
    image: string;
    description?: string;
    year?: number;
    developer?: string;
    rating?: number;
    platforms?: string[];
}