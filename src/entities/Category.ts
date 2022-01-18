import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm"
import ManageIdentity from "../services/ManageIdentity"

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if(!this.id) {
      this.id = new ManageIdentity().generateId()
    }
  }
}