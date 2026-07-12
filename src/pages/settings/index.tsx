import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Form from "#/components/ui/form";
import Btn from "#/components/ui/btn";
import { requestSettings } from "#/api/settings/requestSettings";
import { requestUpdateSettings } from "#/api/settings/requestUpdateSettings";
import type { SettingsType } from "#/types/pagest.types.ts/SettingsPage.types.ts/Settings.type";
import { settingsFormConfig, settingsValueScheme } from "./settingsFormConfig";
import "./index.css";
import Loader from "#/components/ui/loader";

const Settings = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const {
    data: settings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: requestSettings,
  });

  if (isLoading || !settings)
    return (
      <div className="settings-loader">
        <Loader size="lg" />
      </div>
    );

  const handleUpdateSettings = async (
    e: React.ChangeEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target)) as Record<
      string,
      string
    >;

    const updatedSettings: SettingsType = {
      id: settings.id,
      user_id: settings.user_id,
      min_nights: Number(formData.min_nights),
      max_nights: Number(formData.max_nights),
      max_guests: Number(formData.max_guests),
      breakfast_price: Number(formData.breakfast_price),
    };

    setIsUpdating(true);
    await requestUpdateSettings(updatedSettings);
    await refetch();
    setIsUpdating(false);
  };

  return (
    <div className="settings">
      <h1>Update hotel settings</h1>
      <Form
        fields={settingsFormConfig}
        scheme={settingsValueScheme}
        defaultValues={{
          min_nights: settings.min_nights,
          max_nights: settings.max_nights,
          max_guests: settings.max_guests,
          breakfast_price: settings.breakfast_price,
        }}
        onSubmit={handleUpdateSettings}
      >
        <Btn type="submit" variation="primary" size="lg">
          <span className={isUpdating ? "btn-label-hidden" : ""}>
            Update settings
          </span>
          {isUpdating && (
            <span className="btn-loader-overlay">
              <Loader size="sm" />
            </span>
          )}
        </Btn>
      </Form>
    </div>
  );
};
export default Settings;
