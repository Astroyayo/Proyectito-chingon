import { Router } from 'express';

import { userController } from '../controllers/userController';

class UserRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    private config(): void {
        this.router.post('/login', userController.login);
    }

}

const userRoutes = new UserRoutes();

export default userRoutes.router;