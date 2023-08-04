export interface Product
{
    id : number,
    name : string,
    price: number,
    amount:number,
    productDetails:string,
    imageUrl?:string,
    ProductImage? : File | null,
    catagoryId : number
}