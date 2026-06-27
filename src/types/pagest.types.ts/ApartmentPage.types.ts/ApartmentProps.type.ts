import type { ApartmentType } from "./Apartment.type";

export type ApartmentProps = {
  refetch: () => void;
  apartment: ApartmentType;
  isLast: boolean;
};
