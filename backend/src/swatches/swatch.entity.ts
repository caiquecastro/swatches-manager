import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn({ type: 'timestamptz' })
  date: Date;

  @Column()
  active: boolean;
}
