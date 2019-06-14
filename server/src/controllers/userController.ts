import { Request, Response } from 'express';

import pool from '../database';

class UserController {

    public async test(req: Request, res: Response) {
        await pool.query('SELECT * FROM debts', (err, rows, fields) => {
            res.json(rows);
        });

    }

    public async login(req: Request, res: Response) {

        await pool.query(`
            SELECT id, userType
            FROM users 
            WHERE telephone = ? AND password = ?`
            , [req.body.telephone, req.body.password], (err, rows, fields) => {

                console.log(req.body)
                if (err) {
                    throw err;
                }
                if (rows.length == 0) {
                    res.json({
                        logged: false
                    });
                }
                else {

                    let admin: boolean;
                    if (rows[0].userType == 2) {
                        admin = false
                    } else {
                        admin = true
                    }
                    res.json({
                        logged: true,
                        admin: admin,
                        id: rows[0].id
                    })
                }
            });


    }

    public async SignUp(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO users SET ?', [req.body], (err, rows, fields) => {
            if (err) {
                throw err;
            }
            res.json({
                message: 'User created.'
            });
        });
    }

    public async registerPayment(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO payments SET ?', [req.body], (err, rows, fields) => {
            if (err) {
                throw err;
            }
            res.json({
                message: 'Payment registered.'
            });
        });
    }

    public async registerDebt(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO debts SET ?', [req.body], (err, rows, fields) => {
            if (err) {
                throw err;
            }
            res.json({
                message: 'Debt registeres.'
            });
        });
    }

}

export const userController = new UserController();