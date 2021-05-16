import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface userId {
    id: string
}

class getCourseUnitsService{

    public async execute({id}:userId){

        const courseUnitRepository = getRepository(CourseUnit);

        const coursesUnits = courseUnitRepository.find();

        if(!coursesUnits){
            return{
                message: 'courses units not found'
            }
        }

        return coursesUnits;


    }
}

export {getCourseUnitsService};


