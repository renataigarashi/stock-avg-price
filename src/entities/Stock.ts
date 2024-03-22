// src/entities/Stock.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
