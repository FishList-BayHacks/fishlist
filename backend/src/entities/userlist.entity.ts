import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserList {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    user_name: string;

    @Column()
    password_hash: string;

    @Column()
    favorite_dive_sites: string[]

    @Column({ length: 255})
    fish_list_id: string[];

    @Column()
    fish_seen_id: string[];
}