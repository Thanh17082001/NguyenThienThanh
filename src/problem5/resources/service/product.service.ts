
import { productModel } from "../model/product.model";
import product from "../interface/product.interface";

const create = async (data: any) => {
    return await productModel.create(data)
}


const find = async (condition: object = {}, pageNumber: number | 1, pageSize: number | 6,sort:object |{}):Promise<product[]> => {
    const skip = (pageNumber - 1) * pageSize;
    return await productModel.find(condition).sort(sort ||{createdAt:-1}).skip(skip).limit(pageSize).lean();
}

const findOne = async (condition: object = {}) :Promise<product | null> => {
    return await productModel.findOne(condition).lean() ;
}

const findById = async (id: string) :Promise<product | null> => {
    return await productModel.findById(id).lean() ;
}


export {find, create, findOne, findById}