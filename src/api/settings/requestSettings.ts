import supabase from "#/config/supabaseClientVite";
import type { SettingsType } from "#/types/pagest.types.ts/SettingsPage.types.ts/Settings.type";
import { GenericError } from "#/utils/GenericError";
import { isAuthApiError } from "@supabase/supabase-js";

export const requestSettings = async (): Promise<SettingsType> => {
  const response = await supabase.rpc("get_booking_settings");

  if (response.error) {
    if (isAuthApiError(response)) {
      throw response.error;
    } else {
      throw new GenericError();
    }
  }
  return response.data;
};
