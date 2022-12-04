export interface IProduct {
    id: number;
    name: string;
    price: number;
    quantity?: number;
    imgUrl: string;
}
export interface CreateProduct {
    name: string;
    price: number;
    quantity?: number;
    imgUrl: string;
}