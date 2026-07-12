import * as v from "valibot";

export const LoginScheme = v.object({
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
