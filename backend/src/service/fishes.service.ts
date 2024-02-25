import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Fish } from "src/entities/fishes.entity";

@Injectable()
export class UserlistService {
    constructor(
        @Inject('USERLIST_REPOSITORY')
        private userlistRepository:Repository<Fish>,
    ){}

    async findAll(): Promise<Fish[]> {
        return this.userlistRepository.find();
    }
} 