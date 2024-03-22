// src/entities/Stock.ts

import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './User';

@Entity({name: 'tb_stock'})
export class StockEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ticket: string;

  @Column()
  quantity: string;

  @Column()
  purchasePrice: number;

  @Column()
  purchaseDate: Date;

  @ManyToMany(() => UserEntity)
  @JoinTable({name: 'tb_users_stocks'})
  users: UserEntity[]; 
}
