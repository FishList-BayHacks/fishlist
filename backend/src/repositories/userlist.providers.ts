import { DataSource } from "typeorm";
import { UserList } from "src/entities/userlist.entity";

export const userlistProviders = [
    {
        provide: 'USERLIST_REPOSITORY',
        useFactory: (datasource: DataSource) => datasource.getRepository(UserList),
        inject: ['DATA_SOURCE']
    }
]