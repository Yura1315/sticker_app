import * as Hapi from '@hapi/hapi';
import Joi from 'joi';
import controllers from '../../controllers';


const routes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/users',
    handler: controllers.createTest,
    options: {
      tags: [ 'api', 'user_create' ],
      description: 'Создать нового пользователя',
      validate: {
        payload: Joi.object({
          firstName: Joi.string().required().description('Введите имя пользователя'),
          lastName: Joi.string().required().description('Введите фамилию пользователя')
        })
      },
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              descriptions: 'succes request'
            },
            400: {
              description: 'Fail'
            }
          }
        }
      }
    }
  },
];

export default routes;