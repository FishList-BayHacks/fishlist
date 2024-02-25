import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'user',
                password: 'password',
                database: 'fishlist',
                entities: [
                    "dist/**/*.entity.js"
                    //__dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true
            });

            return dataSource.initialize();
        }
    }
]