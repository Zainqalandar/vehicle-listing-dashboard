

export interface ProductSchema {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

export type ProductsSchema = {
    products: ProductSchema[];
    total: number;
    skip: number;
    limit: number;
};