import {Router, Request, Response, response} from 'express';
import {ActivyController} from './controller/ActivyController';
import { CourseUnitController } from './controller/CourseUnitController';
import {UserController} from './controller/UserController';
import {AuthenticateController} from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

interface UserRequest {
    name: string;
    email:string;
    password:string;
}

const userController = new UserController()
const activyController = new ActivyController()
const courseUnitController = new CourseUnitController()
const autheticateController = new AuthenticateController()


const routes = Router();

routes.post('/user', userController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/activy', authenticated, activyController.show);
routes.get('/courseunit', authenticated, courseUnitController.show);

routes.post('/auth', autheticateController.create);
routes.post('/activy', authenticated, activyController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);

export default routes;