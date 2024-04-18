import jwt from "jsonwebtoken";

import{Request, Response} from 'express'
import userDTO from "../dto/user.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

class UserController {
  async logIn(req: Request, res: Response) {
    try {
      let user: userDTO = plainToClass(userDTO, req.body);
      const dataError = await validate(user);
      if (dataError.length > 0) {
        return res.status(400).json({
          error: dataError,
          mes: "Data can not empty !!!",
        });
        }
        const token = jwt.sign({...user}, "nguyenthienthanh", {
          expiresIn: "3m"
        });
        return res.status(200).json({
            token,
            user
        });
    } catch (error) {
        console.log(error);
      res.status(500).json(error);
    }
  }

    async getAll(req: Request, res: Response) {
        try {
          console.log(12123123);
        return res.status(200).json({thanh:'thanhf coong'})
      } catch (error) {
          console.log(error);
         res.status(500).json(error);
      }
  }
}

export default new UserController()