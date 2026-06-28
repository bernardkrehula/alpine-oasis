import supabase from "#/config/supabaseClientVite";
import type { ApartmentType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/Apartment.type";
import { GenericError } from "#/utils/GenericError";
import { isAuthApiError } from "@supabase/supabase-js";

export const requestApartments = async (filterValues: {
  discount: string;
  sortBy: string;
}): Promise<ApartmentType[]> => {
  let query = supabase.from("apartments").select();

  if (filterValues) {
    switch (filterValues.discount) {
      case "no-discount":
        query = query.eq("discount", 0);
        break;
      case "with-discount":
        query = query.neq("discount", 0);
        break;
      case "all":
      default:
        break;
    }
    switch (filterValues.sortBy) {
      case "name-asc":
        query = query.order("name", { ascending: true });
        break;
      case "name-desc":
        query = query.order("name", { ascending: false });
        break;
      case "price-asc":
        query = query.order("price", { ascending: true });
        break;
      case "price-desc":
        query = query.order("price", { ascending: false });
        break;
      case "capacity-asc":
        query = query.order("capacity", { ascending: true });
        break;
      case "capacity-desc":
        query = query.order("capacity", { ascending: false });
        break;
    }
  }
  const result = await query;

  if (result.error) {
    if (isAuthApiError(result)) {
      throw result.error;
    } else {
      throw new GenericError();
    }
  }
  return result.data;
};
