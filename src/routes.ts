import {Router} from 'express';

const routes = Router();

routes.get('/user', (request, response) =>{ 

    const{name, email, password} = request.body

    response.json({
    //message:'Hello World',
    name,
    email,
    password

    })
})

routes.get('/user/:id', (request, response) => {
   const{id} = request.params;

   response.json({userId:id
   })
})


export default routes;