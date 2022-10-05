import { Brand } from './../brand/brand';
import { Status } from './../enum/status';

export class Model{
    id! : number;
    name! : string;
    brand! : Brand;
    status! : Status;
}