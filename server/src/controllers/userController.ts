import { Request, Response } from 'express';

import db from '../database';

class UserController {

    getPayments(req: Request, res: Response) {
        res.end('hola mundo');
    }

    public async login(req: Request, res: Response): Promise<void> {
        db.query(`SELECT * FROM users WHERE telephone = '${req.params.telephone}'
        AND password = PASSWORD('${req.params.password}')`);
    }

}

export const userController = new UserController();