import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("dive_sites")
export class Divesites {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: true})
    lat: number;

    @Column({ type: 'int', nullable: true})
    lon: number;

    @Column({ length: 255})
    site_name: string;

    @Column({ length: 255})
    county_name: string;
}