import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Form from "#/components/ui/form";
import Btn from "#/components/ui/btn";
import { requestSettings } from "#/api/requestSettings";
import { requestUpdateSettings } from "#/api/requestUpdateSettings";
import type { SettingsType } from "#/types/pagest.types.ts/SettingsPage.types.ts/Settings.type";
import { settingsFormConfig } from "./settingsFormConfig";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

/*   const {
    data: settings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: requestSettings,
  });
  if (isLoading || !settings) return; */

 /*  const handleUpdateSettings = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target)) as Record<string, string>;

    const updatedSettings: SettingsType = {
      id: settings.id,
      minNights: Number(formData.minNights),
      maxNights: Number(formData.maxNights),
      maxGuests: Number(formData.maxGuests),
      breakfastPrice: Number(formData.breakfastPrice),
    };

    setIsUpdating(true);
    await requestUpdateSettings(updatedSettings);
    await refetch();
    setIsUpdating(false);
  }; */

  return (
    <div className="settings">
      <h1>Update hotel settings</h1>
      <Form
        fields={settingsFormConfig}
        /* defaultValues={settings}
        onSubmit={handleUpdateSettings} */
      >
        <Btn type="submit" variation="primary" size="lg" isLoading={isUpdating}>
          Update settings
        </Btn>
      </Form>
    </div>
  );
};
export default Settings;
