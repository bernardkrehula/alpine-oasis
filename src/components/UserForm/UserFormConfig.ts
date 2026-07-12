import type { FormFieldType } from "#/types/ui.types.ts/FormType";

export const UserFormConfig: FormFieldType[] = [
  {
    id: "full-name",
    label: "Full name",
    type: "text",
    name: "fullName",
    required: true,
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    name: "email",
    required: true,
  },
  {
    id: "password",
    label: "Password (min 8 characters)",
    type: "password",
    name: "password",
    required: true,
    minLength: 8,
  },
  {
    id: "repeat-password",
    label: "Repeat password",
    type: "password",
    name: "repeatPassword",
    required: true,
    minLength: 8,
  },
];
