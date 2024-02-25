import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Divesites } from "src/entities/divesites.entity";

@Injectable()
export class DivesitesService {
    constructor(
        @Inject('DIVESITES_REPOSITORY')
        private divesitesRepository:Repository<Divesites>,
    ){}

    async findAll(): Promise<Divesites[]> {
        return this.divesitesRepository.find();
    }
} 