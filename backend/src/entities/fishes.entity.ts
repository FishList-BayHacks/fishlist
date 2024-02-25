import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("fishes")
export class Fish{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255})
    common_name: string;

    @Column()
    scientific_name: string;

    @Column()
    image_url: string;

    @Column("text", {array: true})
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