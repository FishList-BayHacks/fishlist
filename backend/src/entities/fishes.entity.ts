import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fish {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255})
    common_name: string;

    @Column()
    scientific_name: string;

    @Column()
    image_url: string;

    @Column()
    county: string[];

    @Column()
    freshwater: boolean;

    @Column()
    saltwater: boolean;

    @Column()
    url: string;

    @Column()
    description: string;
}