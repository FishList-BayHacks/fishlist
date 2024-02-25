import { DataSource } from "typeorm";
import { Divesites } from "src/entities/divesites.entity";

export const divesitesProviders = [
    {
        provide: 'DIVESITES_REPOSITORY',
        useFactory: (datasource: DataSource) => datasource.getRepository(Divesites),
        inject: ['DATA_SOURCE']
    }
]