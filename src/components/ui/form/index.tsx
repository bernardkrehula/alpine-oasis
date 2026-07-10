import Input from "#/components/ui/input";
import type { FormType } from "#/types/ui.types.ts/FormType";
import "./index.css";

const Form = ({ fields, defaultValues, onSubmit, error, children, id }: FormType) => {
  return (
    <form className="form" onSubmit={onSubmit} id={id}>
      <div className="form-inputs">
        {fields.map((field) => {
          const { id: fieldId, label, type, name, required, minLength } = field;

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
              />
            </div>
          );
        })}
      </div>
      {error && <span className="form-error">{error}</span>}
      <div className="form-btns">{children}</div>
    </form>
  );
};
export default Form;
