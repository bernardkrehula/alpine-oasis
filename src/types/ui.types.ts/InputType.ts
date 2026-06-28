export type InputType = {
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  variation?: string;
  type?: string;
  name: string;
  value?: string;
  defaultValue: string | number;
  required?: boolean;
};
