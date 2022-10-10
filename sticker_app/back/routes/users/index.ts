import * as Hapi from '@hapi/hapi';
import * as options from '../users/options';
import controllers from '../../controllers';


const routes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/users',
    handler: controllers.createTest,
    options: options.create
  },
  {
    method: 'GET',
    path: '/users',
    handler: controllers.findTest,
    options: options.find
  }
];

export default routes;