import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Counties {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255})
    county_name: string;

    @Column({ length: 255})
    name_ascii: string;

    @Column({ length: 255})
    type: string;

    @Column('int')
    county_fips: number;

    @Column({ length: 2, nullable: true})
    state_id: string;

    @Column({ length: 100})
    state_name: string;

    @Column({ type: 'int', nullable: true})
    lat: number;

    @Column({ type: 'int', nullable: true})
    lon: number;

    @Column('int')
    population: number;
}