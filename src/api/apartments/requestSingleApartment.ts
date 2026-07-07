import supabase from "#/config/supabaseClientVite";
import type { ApartmentId } from "#/types/pagest.types.ts/ApartmentPage.types.ts/ApartmentId";
import { GenericError } from "#/utils/GenericError";
import { isAuthApiError } from "@supabase/supabase-js";

export const requestSingleApartment = async (id: ApartmentId) => {

  const response = await supabase
    .from("apartments")
    .select()
    .eq("id", id);

  if (response.error) {
    if (isAuthApiError(response)) {
      return response.error;
    } else {
      throw new GenericError();
    }
  }
 
  return response.data[0];
};
