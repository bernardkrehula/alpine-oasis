export type ApartmentMenuType = {
  id: string;
  handleActiveEditModal: () => void;
  deleteApartment: (value: string) => void;
  duplicateApartment: () => void;
  onClickOutside: () => void;
};
