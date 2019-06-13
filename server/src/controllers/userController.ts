import { Request, Response } from 'express';

import db from '../database';

class UserController {

    getPayments(req: Request, res: Response) {
        res.end('hola mundo');
    }

    public async login(req: Request, res: Response): Promise<void> {
        db.query(`SELECT * FROM users WHERE telephone = '${req.body.telephone}'
        AND password = PASSWORD('${req.body.password}')`);
    }

}

export const userController = new UserController();