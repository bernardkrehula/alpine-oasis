import supabase from "#/config/supabaseClientVite";
import type { ApartmentType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/Apartment.type";
import { GenericError } from "#/utils/GenericError";
import { isAuthApiError } from "@supabase/supabase-js";

export const requestDuplicateApartment = async (apartment: ApartmentType) => {
  const { id } = apartment;

  const response = await supabase
    .from("apartments")
    .select("*")
    .eq("id", id)
    .single();

  if (response.data) {
    const { id, ...apartment } = response.data;
    const customId = crypto.randomUUID();

    await supabase.from("apartments").insert({ id: customId, ...apartment });
  }
  if (response.error) {
    if (isAuthApiError(response)) {
      return response.error;
    } else {
      throw new GenericError();
    }
  }

  return response;
};
