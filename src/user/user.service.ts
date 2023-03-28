import UserRepository from '../models/user.model';

export const getAllUser = async () => {
    return UserRepository.findAll();
};

export const addUser = async (userInfo: any) => {
    return await new UserRepository(userInfo).save();
};

type UserDependencies = {
    userRepository: UserRepository;
    logger: any;
};

export class UserService {
    constructor(private dependencies: UserDependencies) {}

    async findAll() {
        return this.dependencies.userRepository
    }
}
