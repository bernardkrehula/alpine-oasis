import { useState } from "react";
import Btn from "#/components/ui/btn";
import {
  aparmnetsDiscount,
  apartmentsSort,
} from "#/config/configData/sortConfig";
import "./index.css";
import { useSearchParams } from "react-router-dom";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { requestApartments } from "#/api/apartments/requestApartmets";
import type { ActiveApratmentFilter } from "#/types/pagest.types.ts/ApartmentPage.types.ts/ActiveApratmentFilter.type";
import type { ApartmentType } from "#/types/pagest.types.ts/ApartmentPage.types.ts/Apartment.type";
import ApartmentModal from "./apartment/apartmentModal";
import { getFormData } from "#/utils/getFormData";
import { requestAddNewApartment } from "#/api/apartments/requestAddNewApartment";
import Filters from "#/components/ui/filters";
import Sort from "#/components/ui/sort";
import Table from "#/components/ui/table";
import Theader from "#/components/ui/table/Theader";
import Tbody from "#/components/ui/table/Tbody";
import TRow from "#/components/ui/table/TRow";
import { columns, defaultApartment, theadData } from "./apartmentsData";
import { requestDuplicateApartment } from "#/api/apartments/requestDuplicateApartment";
import { toApartmentId } from "#/types/pagest.types.ts/ApartmentPage.types.ts/ApartmentId";
import { requestApartmentDelete } from "#/api/apartments/requestApartmentDelete";
import { requestEditApartment } from "#/api/apartments/requestEditApartment";
import { requestSingleApartment } from "#/api/apartments/requestSingleApartment";
import { requestUploadApartmentImg } from "#/api/apartments/requestUploadApartmentImg";
import Loader from "#/components/ui/loader";
//Odraditi upload slika
//Odraditi settings page
const Apartments = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeIcon, setActiveIcon] = useState<ActiveApratmentFilter>({
    all: true,
    noDiscount: false,
    withDiscount: false,
  });
  const filterValues = {
    discount: searchParams.get("discount") ?? "all",
    sortBy: searchParams.get("sortBy") ?? "name-asc",
  };
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [apartment, setApartment] = useState<ApartmentType>(defaultApartment);

  const {
    data: apartments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["apartments", filterValues],
    queryFn: () => requestApartments(filterValues),
    placeholderData: keepPreviousData,
  });
  if (isLoading || !apartments) return <div className="apartments-loader"><Loader size="lg" /></div>;

  const setSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    searchParams.set("sortBy", option);
    setSearchParams(searchParams);
  };
  const handleDiscount = (discount: string, id: string) => {
    setDiscount(discount);
    handleActiveIcon(id);
  };
  const setDiscount = (discount: string) => {
    searchParams.set("discount", discount);
    setSearchParams(searchParams);
  };

  const handleActiveIcon = (name: string) => {
    setActiveIcon((prev) => {
      const active = Object.fromEntries(
        Object.entries(prev).map(([icon]) =>
          icon === name ? [name, true] : [icon, false],
        ),
      );
      return active as typeof activeIcon;
    });
  };
  const handleApartmentForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const id = e.currentTarget.id;
    const file = new FormData(e.currentTarget).get("img") as File;
    const data = getFormData(e);
  
    if (file && file.size > 0) {
      data.img = await requestUploadApartmentImg(file, data.id);
    }

    if (id) await requestEditApartment(data);
    else await requestAddNewApartment(data);
    handleActiveModal();
    refetch();
  };

  const handleActiveModal = () => {
    setActiveModal((prev) => !prev);
  };
  const showNewApartmentForm = () => {
    handleActiveModal();
    setApartment(defaultApartment);
    setIsEdit(false);
  };

  const duplicateApartment = async (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const row = target.closest("tr");
    if (!row) return;

    const id = toApartmentId(row.id);
    await requestDuplicateApartment(id);
    refetch();
  };
  const openActiveApartmentModal = async (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const row = target.closest("tr");
    if (!row) return;

    const id = toApartmentId(row.id);
    const data = await requestSingleApartment(id);
    setApartment(data);
    setIsEdit(true);
    handleActiveModal();
  };

  const deleteApartment = async (id: string) => {
    const apartmentId = toApartmentId(id);
    await requestApartmentDelete(apartmentId);
    refetch();
  };
  return (
    <div className="apartments">
      <div className="apartments-header">
        <h1>All apartments</h1>
        <Filters
          filtersData={aparmnetsDiscount}
          handleFilter={handleDiscount}
          activeFilter={activeIcon}
        />
        <Sort onChange={setSort} options={apartmentsSort} size="md" />
      </div>
      <Table>
        <Theader theadData={theadData} />
        <Tbody>
          {apartments.map((row: ApartmentType) => (
            <TRow
              key={row.id}
              row={row}
              columns={columns}
              onFirstAction={duplicateApartment}
              onSecondAction={openActiveApartmentModal}
              onThirdAction={deleteApartment}
            />
          ))}
        </Tbody>
      </Table>
      {activeModal && (
        <ApartmentModal
          handleActiveModal={handleActiveModal}
          handleApartmentData={handleApartmentForm}
          apartment={apartment}
          isEdit={isEdit}
        />
      )}
      <Btn
        onClick={showNewApartmentForm}
        type="button"
        variation="primary"
        size="lg"
      >
        Add new apartment
      </Btn>
    </div>
  );
};
export default Apartments;
