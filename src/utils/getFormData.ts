import type { ApartmentType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/Apartment.type";

export const getFormData = (e: React.ChangeEvent<HTMLFormElement>) => {
  e.preventDefault();
  const id = Number(e.target.id);
  const formData = Object.fromEntries(new FormData(e.target));
  const rawData = { id, ...formData } as Record<string, any>;

  const data: ApartmentType = {
        ...rawData,
        id: crypto.randomUUID(),
        name: String(rawData.name),
        description: String(rawData.description ?? ""),
        capacity: Number(rawData.capacity),
        price: Number(rawData.price),
        discount: Number(rawData.discount),
        img: "",
      };

  return data;
};
