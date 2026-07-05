import type { ApartmentType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/Apartment.type";

export const getFormData = (e: React.ChangeEvent<HTMLFormElement>) => {
  e.preventDefault();
  const id = e.target.id;
  const passedId = id ? id : crypto.randomUUID();
  const formData = Object.fromEntries(new FormData(e.target));
  const rawData = { id, ...formData } as Record<string, any>;

  const data: ApartmentType = {
        ...rawData,
        id: passedId,
        name: String(rawData.name),
        description: String(rawData.description ?? ""),
        capacity: Number(rawData.capacity),
        price: Number(rawData.price),
        discount: Number(rawData.discount),
        img: "",
      };

  return data;
};
