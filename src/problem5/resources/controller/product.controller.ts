import { Request, Response } from "express";
import { find, create, findById,findOne } from "../service/product.service";
import product from "../interface/product.interface";


 const createProduct = async (req: Request, res: Response) => {
     try {
        if (Object.keys(req.body).length<= 0) {
            return res.status(404).send('Data cannot be left blank ')
        }
        const data:object = <product> {
            name: req.body.name || '',
            quantity: Number(req.body.quantity) || 0,
            category: req.body.category,
            price:Number(req.body.price) || 0
        }
        await create(data)
        return res.status(200).send('Create is successfully')
    } catch (error) {
        res.status(500).send(error)
    }
}

export{createProduct}