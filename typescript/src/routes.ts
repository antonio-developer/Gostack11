import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request:Request,  response:Response){

  const user = createUser ({
    email:'antonio@gmail.com', 
    password:'1234',
    techs:[
      'Node.js',
      'React.js', 
      'Reactive Native',
      {title:'Javascript', experience:100},
    ],
  });

  return response.json({message: 'Hello World'})
}