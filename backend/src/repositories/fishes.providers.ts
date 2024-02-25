import { DataSource } from "typeorm";
import { Fish } from "src/entities/fishes.entity";

export const fishProviders = [
    {
        provide: 'FISHES_REPOSITORY',
        useFactory: (datasource: DataSource) => datasource.getRepository(Fish),
        inject: ['DATA_SOURCE']
    }
]