import type { FormFieldType } from "#/types/ui.types.ts/FormType";
import * as v from "valibot";

export const settingsFormConfig: FormFieldType[] = [
  {
    id: "min-nights",
    label: "Minimum nights/booking",
    type: "number",
    name: "min_nights",
    required: true,
    min: 0,
  },
  {
    id: "max-nights",
    label: "Maximum nights/booking",
    type: "number",
    name: "max_nights",
    required: true,
    min: 0,
  },
  {
    id: "max-guests",
    label: "Maximum guests/booking",
    type: "number",
    name: "max_guests",
    required: true,
    min: 0,
  },
  {
    id: "breakfast-price",
    label: "Breakfast price",
    type: "number",
    name: "breakfast_price",
    required: true,
    min: 0,
  },
];

export const settingsValueScheme = v.object({
  min_nights: v.pipe(
    v.string("Minimum nights must be a number."),
    v.nonEmpty("Please enter the minimum nights."),
    v.transform(Number),
    v.number("Minimum nights must be a valid number."),
    v.minValue(1, "Minimum nights must be 1 or more."),
  ),
  max_nights: v.pipe(
    v.string("Maximum nights must be a number."),
    v.nonEmpty("Please enter the maximum nights."),
    v.transform(Number),
    v.number("Maximum nights must be a valid number."),
    v.minValue(1, "Maximum nights must be 1 or more."),
  ),
  max_guests: v.pipe(
    v.string("Maximum guests must be a number."),
    v.nonEmpty("Please enter the maximum guests."),
    v.transform(Number),
    v.number("Maximum guests must be a valid number."),
    v.minValue(1, "Maximum guests must be 1 or more."),
  ),
  breakfast_price: v.pipe(
    v.string("Breakfast price must be a number."),
    v.nonEmpty("Please enter the breakfast price."),
    v.transform(Number),
    v.number("Breakfast price must be a valid number."),
    v.minValue(0, "Breakfast price must be 0 or more."),
  ),
});
