import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counties } from "src/entities/counties.entity";

@Injectable()
export class CountieService {
    constructor(
        @Inject('COUNTIE_REPOSITORY')
        private countieRepository:Repository<Counties>,
    ){}

    async findAll(): Promise<Counties[]> {
        return this.countieRepository.find();
    }
} 