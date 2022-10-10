import { createQueryBuilder } from "typeorm";
import DataSource from "../../../ormconfig";

import User from "../entity/User";
import { IUserCreate, IUserFind } from "./interfaces";


const TestRepository = {
  create: async (params: IUserCreate) => {
    const { firstName, lastName } = params;
    const testRepo = DataSource.getRepository(User);
    await testRepo.save({ firstName, lastName, isActive: false });
    return 'ok';
  },
  findUser: async (params: IUserFind) => {
    const { offset, limit, firstName } = params;
    const conditions = DataSource.createQueryBuilder(User, 'user');
    if (firstName) {
      conditions.where('user.firstName ILIKE :firstName', { firstName: `%${firstName}%` });
    }
    conditions.offset(offset).limit(limit);
    console.log(conditions.getQueryAndParameters());
    return await conditions.getMany();
  }
};

export default TestRepository;

