import type { ReactNode } from "react";
import type { GenericSchema } from "valibot";

export type FormFieldType = {
  id: string;
  label: string;
  type: string;
  name: string;
  required?: boolean;
  minLength?: number;
  min?: number;
};

export type FormType = {
  fields: FormFieldType[];
  defaultValues?: Record<string, string | number>;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void | Promise<void>;
  scheme?: GenericSchema<Record<string, string>, Record<string, unknown>>;
  error?: string;
  children?: ReactNode;
  id?: string;
};
