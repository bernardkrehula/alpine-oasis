import { useState } from "react";
import * as v from "valibot";
import Input from "#/components/ui/input";
import type { FormType } from "#/types/ui.types.ts/FormType";
import "./index.css";

const Form = ({
  fields,
  defaultValues,
  onSubmit,
  scheme,
  error,
  success,
  children,
  id,
}: FormType) => {
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (!scheme) {
      onSubmit(e);
      return;
    }

    const formData = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as Record<string, string>;
    const result = v.safeParse(scheme, formData);

    if (!result.success) {
      e.preventDefault();
      const errors: Record<string, string> = {};
      for (const issue of result.issues) {
        const key = issue.path?.[0]?.key;
        if (typeof key === "string" && !errors[key])
          errors[key] = issue.message;
      }
      setFieldErrors(errors);
      setTimeout(() => {
        setFieldErrors({});
      }, 5000);

      return;
    }

    setFieldErrors({});
    onSubmit(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit} id={id}>
      <div className="form-inputs">
        {fields.map((field) => {
          const { id: fieldId, label, type, name, required, minLength, min } = field;

          return (
            <div key={fieldId}>
              <span>{label}</span>
              <Input
                name={name}
                type={type}
                defaultValue={defaultValues?.[name] ?? ""}
                variation="custom-search"
                required={required}
                minLength={minLength}
                min={min}
              />
              {fieldErrors[name] && (
                <span className="field-error">{fieldErrors[name]}</span>
              )}
            </div>
          );
        })}
      </div>
      {error && <span className="form-error">{error}</span>}
      {success && <span className="form-success">{success}</span>}
      <div className="form-btns">{children}</div>
    </form>
  );
};
export default Form;
