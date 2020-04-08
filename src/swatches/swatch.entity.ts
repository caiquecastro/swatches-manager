import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Swatch extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: string;

    @Column()
    image: string;

    @Column()
    color: string;

    @Column()
    date: Date;
  
    @Column()
    active: boolean;
}