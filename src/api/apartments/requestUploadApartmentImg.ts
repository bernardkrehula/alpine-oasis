import supabase from "#/config/supabaseClientVite";
import { GenericError } from "#/utils/GenericError";
import { isAuthApiError } from "@supabase/supabase-js";

export const requestUploadApartmentImg = async (file: File, apartmentId: string) => {
  const fileName = `${apartmentId}-${file.name}`;
  
  
  const response = await supabase.storage.from("images").list()/* upload(fileName, file, {
    upsert: true
  }); */
  console.log(response)
  return
  console.log('bucket: ', response)
  if (response.error) {
      if (isAuthApiError(response)) {
        return response.error;
      } else {
        throw new GenericError();
      }
    }

  const { data } = supabase.storage.from("images").getPublicUrl(fileName);
  console.log('radi: ', response.error)
  return data.publicUrl;
};
