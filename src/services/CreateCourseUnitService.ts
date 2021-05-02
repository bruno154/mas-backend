import {getRepository} from 'typeorm'
import {CourseUnit} from '../models/CourseUnit'

interface CourseUnitData {

    name: string;
    description: string;

}

class CreateCourseUnitService{

    public async execute({name, description}:CourseUnitData){

        const courseUnitRepository = getRepository(CourseUnit);

        const checkCourseUnitExist = await courseUnitRepository.findOne({name})

        if(checkCourseUnitExist){
            throw new Error('The course unit already exist!')
        }

        const unit ={
            name,
            description,
        }

        await courseUnitRepository.save(unit)

        return unit

    }
}

export {CreateCourseUnitService};