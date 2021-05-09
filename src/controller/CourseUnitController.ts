import {Request, Response} from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';

class CourseUnitController {
    async create(request:Request, response:Response){
        const CourseUnitData = request.body;

        const createCourseUnit = new CreateCourseUnitService();

        const courseUnit = createCourseUnit.execute(CourseUnitData);

        return response.json(courseUnit);
    }
}

export{CourseUnitController};