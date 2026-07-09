import supabase from "#/config/supabaseClientVite";
import type { SettingsType } from "#/types/pagest.types.ts/SettingsPage.types.ts/Settings.type";
import { GenericError } from "#/utils/GenericError";
import { isAuthApiError } from "@supabase/supabase-js";

export const requestUpdateSettings = async (settings: SettingsType) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { min_nights, max_nights, max_guests, breakfast_price } = settings;

  const response = await supabase.from("booking_settings").upsert(
    { user_id: user?.id, min_nights, max_nights, max_guests, breakfast_price },
    { onConflict: "user_id" },
  );

  if (response.error) {
    if (isAuthApiError(response)) {
      return response.error;
    } else {
      throw new GenericError();
    }
  }
  return response;
};
