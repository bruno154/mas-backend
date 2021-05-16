import { getRepository } from "typeorm"
import { Activy } from "../models/Activy"

interface userId {
    id: string
}


class getActiviesService{

    public async execute({id}:userId){

        const activyRepository = getRepository(Activy);

        const activies = activyRepository.find();

        if(!activies){
            return{
                message: 'activie not found'
            }
        }

        return activies;

    }
}

export {getActiviesService}