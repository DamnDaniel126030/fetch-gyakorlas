export interface Item {
    id : number, rating : number, status : string, product_id : string;
}

export interface CreateItemDto {
    rating : number, status : string, product_id : string;
}

