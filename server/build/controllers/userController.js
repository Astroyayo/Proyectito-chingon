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
const util_1 = require("util");
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
            SELECT id, userType,CONCAT(name, " ", surname) as name
            FROM users 
            WHERE telephone = ? AND password = ?`, [req.body.telephone, req.body.password], (err, rows, fields) => {
                console.log(req.body);
                if (err) {
                    throw err;
                }
                if (rows.length == 0) {
                    res.json({
                        logged: false
                    });
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
                        id: rows[0].id,
                        name: rows[0].name
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
            yield database_1.default.query('INSERT INTO payments (id_debt, id_user, amount, paymentDate) VALUES (?,?,?,?)', [req.body.id_debt, req.body.id_user, req.body.amount, req.body.paymentDate], (err, rows, fields) => {
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
            yield database_1.default.query('INSERT INTO debts (concept, amount, creationDate) VALUES(?,?,?)', [req.body.concept, req.body.amount, req.body.creationDate], (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                console.log(req.body);
                req.body.users.forEach((user) => {
                    if (!util_1.isNull(user)) {
                        database_1.default.query('INSERT INTO debtdetails (id_debt, debtor) VALUES (?,?)', [rows.insertId, user], (err, rows, fields) => {
                            if (err) {
                                throw err;
                            }
                            res.json({
                                message: 'Debt registered.'
                            });
                        });
                    }
                });
            });
        });
    }
    getDebtsByDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT debts.*, CONCAT(users.name, " ", users.surname) as name 
        FROM debts JOIN 
        debtdetails ON debtdetails.id_debt = debts.id 
        JOIN users ON debtdetails.debtor = users.id
        WHERE debts.creationDate >= ? AND debts.creationDate <= ?`, [req.body.startDate, req.body.endDate], (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                res.json(rows);
            });
        });
    }
    getDebtsByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT debts.* FROM debts JOIN 
        debtdetails ON debtdetails.id_debt = debts.id 
        WHERE debtdetails.debtor = ?`, [req.params.id], (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                res.json(rows);
            });
        });
    }
    getTotalDue(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT getTotalDue(?) as due', [req.params.id], (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                res.json(rows);
            });
        });
    }
    getGeneralDue(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT getGeneralDue()', (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                res.json(rows);
            });
        });
    }
    getPaymentsByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM payments WHERE id_user = ?', [req.params.id], (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                res.json(rows);
            });
        });
    }
    getDebtors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT id, telephone , CONCAT(name, " ", surname) as name FROM users WHERE userType = 2', (err, rows, fields) => {
                if (err) {
                    throw err;
                }
                res.json(rows);
            });
        });
    }
}
exports.userController = new UserController();
