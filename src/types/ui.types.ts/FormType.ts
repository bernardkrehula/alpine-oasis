import type { ReactNode } from "react";

export type FormFieldType = {
  id: string;
  label: string;
  type: string;
  name: string;
  required?: boolean;
  minLength?: number;
};

export type FormType = {
  fields: FormFieldType[];
  defaultValues?: Record<string, string | number>;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void | Promise<void>;
  error?: string;
  children?: ReactNode;
  id?: string;
};
