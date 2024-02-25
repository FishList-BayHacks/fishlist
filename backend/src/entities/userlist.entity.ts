import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserList {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    user_name: string;

    @Column()
    password_hash: string;

    @Column("text", {array: true})
    favorite_dive_sites: string[]

    @Column("int", { array: true})
    fish_list_id: number[];

    @Column("int", { array: true})
    fish_seen_id: number[];
}