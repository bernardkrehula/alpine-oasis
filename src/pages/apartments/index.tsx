import { useState } from "react";
import Btn from "#/components/ui/btn";
import Select from "#/components/ui/select";
import {
  aparmnetsDiscount,
  apartmentsSort,
} from "#/config/configData/sortConfig";
import "./index.css";
import Apartment from "./apartment";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { requestApartments } from "#/api/requestApartmets";
import { requestEditApartment } from "#/api/requestEditApartment";

const Apartments = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeIcon, setActiveIcon] = useState({
    all: false,
    noDiscount: false,
    withDiscount: false,
  });
  const [activeEditModal, setActiveEditModal] = useState<boolean>(false);

  const { data: apartments, isLoading } = useQuery({
    queryKey: ["apartments"],
    queryFn: () => requestApartments(),
  });
  if (isLoading) return;

  const setSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    searchParams.set("sortBy", option);
    setSearchParams(searchParams);
  };
  const setDiscount = (discount: string) => {
    searchParams.set("discount", discount);
    setSearchParams(searchParams);
  };

  const handleActiveIcon = (e: React.ChangeEvent<HTMLButtonElement>) => {
    const name = e.target.name;
    setActiveIcon((prev) => {
      const active = Object.fromEntries(
        Object.entries(prev).map(([icon]) =>
          icon === name ? [name, true] : [icon, false],
        ),
      );
      return active as typeof activeIcon;
    });
  };

  const handleEditApartment = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(e.target.id);
    const formData = Object.fromEntries(new FormData(e.target));
    const data = { id, ...formData };
    await requestEditApartment(data);
    handleActiveEditModal();
  };
  const handleActiveEditModal = () => {
    setActiveEditModal(prev => !prev);
  }

  return (
    <div className="apartments">
      <div className="apartments-header">
        <h1>All apartments</h1>
        <menu>
          {aparmnetsDiscount.map((discount) => {
            const { name, content } = discount;
            return (
              <Btn
                key={name}
                variation="ghost"
                size="md"
                active={`${activeIcon && activeIcon[name] && "act"}`}
                name={name}
              >
                {content}
              </Btn>
            );
          })}
        </menu>
        <Select options={apartmentsSort} size="md" />
      </div>
      <div className="apartments-table">
        <thead className="apartments-table-header">
          <tr>
            <th className="apartment-th">Apartment</th>
            <th className="capacity-th">Capacity</th>
            <th className="price-th">Price</th>
            <th className="discount-th">Discount</th>
          </tr>
        </thead>

        <table className="apartments-table-content">
          {apartments?.map((apartment) => {
            return (
              <Apartment
                key={apartment.id}
                apartment={apartment}
                handleEditApartment={handleEditApartment}
                activeEditModal={activeEditModal}
                handleActiveEditModal={handleActiveEditModal}
              />
            );
          })}
        </table>
      </div>
      <Btn variation="ghost" size="md">
        Add new apartment
      </Btn>
    </div>
  );
};
export default Apartments;
