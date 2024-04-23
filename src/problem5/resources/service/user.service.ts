
import { userModel } from "../model/user.model";
import user from "../interface/user.interface";
import mongoose from "mongoose";
import { productModel } from "../model/product.model";



const create = async (data: user) => {
  return await userModel.create(data);
};


const find = async (condition: object = {}, pageNumber: number = 0, pageSize: number = 0, sort: {
    [field: string]: 1 | -1
} = { createdAt: -1 }): Promise<user[]> => {

    if (pageNumber == 0 && pageSize == 0) {
        return await productModel.find().lean()
    }
    const skip = (Number(pageNumber) - 1) * Number(pageSize);
    return await userModel
      .find(condition)
      .sort(sort)
      .skip(skip)
      .limit(pageSize)
      .lean();
}

const findOne = async (condition: object = {}): Promise<user | null> => {
    return await userModel.findOne(condition).lean();
}

const findById = async (id: mongoose.Types.ObjectId): Promise<user | null> => {
    return await userModel.findById(id).lean();
}

const updateById = async (id: mongoose.Types.ObjectId, data: user): Promise<user | null> => {
    return await userModel.findByIdAndUpdate(
        id,
        { $set: data },
        {
            returnDocument: 'after',
            new:true
        }
    ).lean()
}

const deleteById = async (id: mongoose.Types.ObjectId) => {
    return await userModel.findByIdAndDelete(id)
}


export { find, create, findOne, findById, updateById, deleteById }