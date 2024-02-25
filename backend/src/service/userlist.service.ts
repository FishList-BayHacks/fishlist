import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserList } from "src/entities/userlist.entity";

@Injectable()
export class UserlistService {
    constructor(
        @Inject('USERLIST_REPOSITORY')
        private userlistRepository:Repository<UserList>,
    ){}

    async findAll(): Promise<UserList[]> {
        return this.userlistRepository.find();
    }
} 