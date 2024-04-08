import express, {Express, Request, Response} from 'express';
import productRouter from './product.router'
const router = (app: Express) => {
    app.use('/product', productRouter)
    app.use('/', (req: Request, res: Response)=>{
        res.send('<h3>Trang chủ</h3>')
    })
}

export default router;

