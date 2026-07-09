import type { FormFieldType } from "#/types/ui.types.ts/FormType";

export const settingsFormConfig: FormFieldType[] = [
  {
    id: "min-nights",
    label: "Minimum nights/booking",
    type: "number",
    name: "min_nights",
    required: true,
  },
  {
    id: "max-nights",
    label: "Maximum nights/booking",
    type: "number",
    name: "max_nights",
    required: true,
  },
  {
    id: "max-guests",
    label: "Maximum guests/booking",
    type: "number",
    name: "max_guests",
    required: true,
  },
  {
    id: "breakfast-price",
    label: "Breakfast price",
    type: "number",
    name: "breakfast_price",
    required: true,
  },
];
