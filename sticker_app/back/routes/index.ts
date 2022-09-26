import controllers from '../controllers';

export default [
  {
    method: 'GET',
    path: '/test',
    handler: controllers.test,
    options: {
      tags: ['api', 'test'],
      description: 'test',
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
  }
];