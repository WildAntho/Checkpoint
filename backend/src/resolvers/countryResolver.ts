import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country";
import { FindOptionsWhere } from "typeorm";

@InputType()
class CountryInput {
  @Field()
  name!: string;
  @Field()
  code!: string;
  @Field()
  emoji!: string;
  @Field()
  continentCode!: string;
}

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getAllCountries(
    @Arg("code", { nullable: true }) code?: string,
    @Arg("continentCode", { nullable: true }) continentCode?: string
  ) {
    let whereClause: FindOptionsWhere<Country> = {};
    if (code) {
      whereClause.code = code;
    }
    if (continentCode) {
      whereClause.continentCode = continentCode;
    }
    const countries = await Country.find({
      where: whereClause,
    });
    return countries;
  }

  @Mutation(() => String)
  async addCountry(@Arg("data") data: CountryInput) {
    const newCountry = new Country();
    Object.assign(newCountry, data);
    await newCountry.save();
    return JSON.stringify("Le pays a bien été enregistré");
  }
}
