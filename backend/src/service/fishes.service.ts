import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Fish } from "src/entities/fishes.entity";

@Injectable()
export class FishService {
    constructor(
        @Inject('FISHES_REPOSITORY')
        private fishRepository:Repository<Fish>,
    ){}

    async findAll(): Promise<Fish[]> {
        return this.fishRepository.find();
    }
} 