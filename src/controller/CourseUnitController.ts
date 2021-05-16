import {Request, Response} from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';
import {getCourseUnitsService} from '../services/getCourseUnitsService';

class CourseUnitController {
    async create(request:Request, response:Response){
        const CourseUnitData = request.body;

        const createCourseUnit = new CreateCourseUnitService();

        const courseUnit = createCourseUnit.execute(CourseUnitData);

        return response.json(courseUnit);
    }

    async show(request:Request, response:Response){
        const userId = request.body.user;

        const getCourseUnits = new getCourseUnitsService();

        const courseUnits = await getCourseUnits.execute(userId);

        return response.json(courseUnits);

    }
}

export{CourseUnitController};