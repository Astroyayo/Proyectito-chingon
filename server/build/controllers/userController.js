"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM debts', (err, rows, fields) => {
                res.json(rows);
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`
            SELECT id, userType
            FROM users 
            WHERE telephone = ? AND password = ?`, [req.body.telephone, req.body.password], (err, rows, fields) => {
                console.log(rows);
                if (err) {
                    throw err;
                }
                if (rows.length == 0) {
                    res.json(req.body);
                }
                else {
                    let admin;
                    if (rows[0].userType == 2) {
                        admin = false;
                    }
                    else {
                        admin = true;
                    }
                    res.json({
                        logged: true,
                        admin: admin,
                        id: rows[0].id
                    });
                }
            });
        });
    }
    SignUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO users SET ?', [req.body], (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                res.json({
                    message: 'User created.'
                });
            });
        });
    }
    registerPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO payments SET ?', [req.body], (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                res.json({
                    message: 'Payment registered.'
                });
            });
        });
    }
    registerDebt(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO debts SET ?', [req.body], (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                res.json({
                    message: 'Debt registeres.'
                });
            });
        });
    }
}
exports.userController = new UserController();
