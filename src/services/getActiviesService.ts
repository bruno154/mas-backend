import { getRepository } from "typeorm"
import { Activy } from "../models/Activy"

interface userId {
    id?: string
}


class getActiviesService{

    public async execute({id}:userId){
        console.log('Id do usuário da atividade: ' + id)

        const activyRepository = getRepository(Activy);

        const activies = await activyRepository.find({relations: ["course_unit"]});

        if(!activies){
            return{
                message: "activie not found"
            }
        }

        return activies;

    }
}

export {getActiviesService}