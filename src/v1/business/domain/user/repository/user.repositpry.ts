import User from '../entity/user.entity';

export default interface IUserRepository {
    getUserByEmail(email: string): Promise<User>;
}
