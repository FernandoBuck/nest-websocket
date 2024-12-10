import User from 'src/v1/business/domain/user/entity/user.entity';
import IUserRepository from 'src/v1/business/domain/user/repository/user.repositpry';
import { DataSource } from 'typeorm';

export default class UserTypeOrmRepository implements IUserRepository {
    constructor(
        private readonly writeDataSource: DataSource,
        private readonly readDataSource: DataSource,
    ) {}
    async getUserByEmail(email: string): Promise<User> {
        return new User({ email: 'teste@test.com', username: 'Jhonsao' });
    }
}
