import { DataSource } from "typeorm";
import { Counties } from "src/entities/counties.entity";

export const countiesProviders = [
    {
        provide: 'COUNTIE_REPOSITORY',
        useFactory: (datasource: DataSource) => datasource.getRepository(Counties),
        inject: ['DATA_SOURCE']
    }
]