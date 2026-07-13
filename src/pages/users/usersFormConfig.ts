import type { FormFieldType } from "#/types/ui.types.ts/FormType";
import * as v from "valibot";

export const usersFormConfig: FormFieldType[] = [
  {
    id: "full-name",
    label: "Full name",
    type: "text",
    name: "fullName",
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    name: "email",
  },
  {
    id: "password",
    label: "Password (min 8 characters)",
    type: "password",
    name: "password",
  },
  {
    id: "repeat-password",
    label: "Repeat password",
    type: "password",
    name: "repeatPassword",
  },
];

export const usersValueScheme = v.object({
  fullName: v.pipe(
    v.string("Your name must be a string."),
    v.nonEmpty("Please enter your name."),
    v.minLength(6, "Your name must have 6 characters or more."),
  ),
  email: v.pipe(
    v.string("Your email must be a string."),
    v.nonEmpty("Please enter your email."),
    v.minLength(6, "Your email must have 6 characters or more."),
    v.email("The email address is badly formatted."),
  ),
  password: v.pipe(
    v.string("Your password must be a string."),
    v.nonEmpty("Please enter your password."),
    v.minLength(6, "Your password must have 6 characters or more."),
  ),
});
