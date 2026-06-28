import type { ApartmentType } from "./Apartment.type";

export type ApartmentModalType = {
  handleActiveModal: () => void;
  handleApartmentData: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
  apartment?: ApartmentType;
  activeModal?: boolean;
};
