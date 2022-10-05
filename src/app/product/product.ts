import { Model } from './../model/model';
import { Brand } from './../brand/brand';

export class Product{
    id! : number;
    name! : string;
    tagName! : string;
    oem! : string;
    hsCode! : string;
    volume! : number;
    weight! : number;
    brand! : Brand;
    model!: Model;
    wholesaleProfitMarkup! : number; ;
    retailProfitMarkup! : number;;
    salePercentage! : number;;
    warrantyProfitMarkup! : number;;
    minimumProfitMarkup! : number;;
    status! : string;
}