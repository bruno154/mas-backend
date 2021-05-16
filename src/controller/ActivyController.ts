import {Request, Response} from 'express';
import { CourseUnit } from '../models/CourseUnit';
import { CreateActivyService } from '../services/CreateActivyService';
import {getActiviesService} from '../services/getActiviesService'

class ActivyController {
    async create(request:Request, response:Response){
        const activyData = request.body;

        const createActivy = new CreateActivyService();

        const activy = createActivy.execute(activyData);

        return response.json(activy);
    }

    async show(request:Request, response:Response){
        const userId = request.body.user;

        const getActivies = new getActiviesService();

        const activies = await getActivies.execute(userId);

        return response.json(CourseUnit);

    }
}

export{ActivyController};