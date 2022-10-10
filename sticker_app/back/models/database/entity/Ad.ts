import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import Category from "./Category";
import User from "./User";

@Entity()
class Ad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  cost: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  publicDate: string;

  @Column()
  viewCount: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @DeleteDateColumn()
  deleted: Date;

  @Column()
  isVisible: boolean;

  @ManyToOne(() => User, (user) => user.ads)
  user: User;

  @ManyToMany(() => Category, (category) => category.ads)
  @JoinTable()
  categories: Category[];
}


export default Ad;