import { Product } from 'src/Model/Product';

export interface ProductResponse
{
    products:Product[],
    totalNumberOfPage:number
}