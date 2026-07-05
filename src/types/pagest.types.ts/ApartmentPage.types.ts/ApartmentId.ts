declare const _brand: unique symbol;

export type ApartmentId = string & { [_brand]: "apartmentId" };
 
export const toApartmentId = (id: string): ApartmentId => {
    return id as ApartmentId;
}