import * as Boom from '@hapi/boom';
import { CreateUserRequest, FindUserRequest } from './interfaces';
import TestRepository from "../models/database/repository";

export default {
  createTest: async (req: CreateUserRequest) => {
    try {
      return TestRepository.create(req.payload);
    } catch (error) {
      return Boom.internal(error.message);
    }
  },
  findTest: async (req: FindUserRequest) => {
    try {
      return TestRepository.findUser(req.query);
    } catch (error) {
      return Boom.internal(error.message);
    }
  }
};