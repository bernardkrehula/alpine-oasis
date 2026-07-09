import supabase from "#/config/supabaseClientVite";
import type { SettingsType } from "#/types/pagest.types.ts/SettingsPage.types.ts/Settings.type";
import { GenericError } from "#/utils/GenericError";
import { isAuthApiError } from "@supabase/supabase-js";

export const requestSettings = async (): Promise<SettingsType> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const response = await supabase.rpc("get_booking_settings", {
    p_user_id: crypto.randomUUID() , /* user?.id */
  });

  if (response.error) {
    if (isAuthApiError(response)) {
      throw response.error;
    } else {
      throw new GenericError();
    }
  }
  return response.data;
};
