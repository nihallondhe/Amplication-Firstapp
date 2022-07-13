import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type CustomerWhereInput = {
  department?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  uid?: IntFilter;
};
