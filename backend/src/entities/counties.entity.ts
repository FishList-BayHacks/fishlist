import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Counties {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255})
    country_name: string;

    @Column({ length: 255})
    name_ascii: string;

    @Column({ length: 255})
    type: string;

    @Column('int')
    country_fips: number;

    @Column({ length: 2})
    state_id: string;

    @Column({ length: 100})
    state_name: string;

    @Column('int')
    lat: number;

    @Column('int')
    lon: number;

    @Column('int')
    population: number;
}