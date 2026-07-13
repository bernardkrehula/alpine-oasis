import supabase from "#/config/supabaseClientVite";
import type { NewUserType } from "#/types/users.types.ts/NewUser.type";
import { GenericError } from "#/utils/GenericError";
import { isAuthApiError } from "@supabase/supabase-js";

export const requestCreateUser = async ({
  fullName,
  email,
  password,
}: NewUserType) => {
  const response = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName } },
  });

  if (response.error) {
    if (isAuthApiError(response.error)) {
      return response;
    } else {
      throw new GenericError();
    }
  }
  return response.data;
};

