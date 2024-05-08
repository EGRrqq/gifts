import { ISale } from "../redux/sale/model/interfaces";

export interface IFormikProps {
  id: string;
  label: string;
}

export type TFormContentProps = Record<keyof Omit<ISale, "id">, IFormikProps>;
