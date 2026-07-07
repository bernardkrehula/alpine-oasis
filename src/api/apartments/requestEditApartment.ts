import supabase from "#/config/supabaseClientVite";
import type { ApartmentType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/Apartment.type";
import { GenericError } from "#/utils/GenericError";
import { isAuthApiError } from "@supabase/supabase-js";

export const requestEditApartment = async (apartment: ApartmentType) => {
  const { id } = apartment;

  const response = await supabase
    .from("apartments")
    .update(apartment)
    .eq("id", id);

    if (response.error) {
    if (isAuthApiError(response)) {
      return response.error;
    } else {
      throw new GenericError();
    }
  }
 
  return response;
};
