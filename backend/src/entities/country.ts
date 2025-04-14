import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";


@ObjectType()
@Entity()
export class Country extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string

  @Field()
  @Column()
  code!: string

  @Field()
  @Column()
  emoji!: string

  @Field()
  @Column()
  continentCode!: string

}
