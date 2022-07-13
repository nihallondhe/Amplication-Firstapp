import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  department?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  uid?: SortOrder;
  updatedAt?: SortOrder;
};
