import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255})
    fish_list_names: string;

    @Column()
    population: boolean;
}