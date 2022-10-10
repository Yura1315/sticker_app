import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Ad from "./Ad";


@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ select: false })
  isActivated: boolean;

  @Column({ select: false })
  activationLink: string;

  @Column({ default: 0 })
  age: number;

  @Column({ default: 'user' })
  role: string;

  @OneToMany(() => Ad, (ad) => ad.user)
  ads: Ad[];
}

export default User;