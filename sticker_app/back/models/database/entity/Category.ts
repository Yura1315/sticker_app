import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import Ad from "./Ad";

@Entity()
class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  title: string;
  @ManyToMany(() => Ad, (ad) => ad.categories)
  ads: Ad[];
}

export default Category;