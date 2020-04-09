import { Repository, EntityRepository } from "typeorm";
import { Swatch } from "./swatch.entity";

@EntityRepository(Swatch)
export class SwatchRepository extends Repository<Swatch> {}