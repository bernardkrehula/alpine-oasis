import { FaHouse } from "react-icons/fa6";
import { LiaCalendarAltSolid } from "react-icons/lia";
import { BsBuildingsFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export const navLinksIcons = [
  {
    id: "home-link",
    name: "home",
    path: <FaHouse />,
  },
  {
    id: "bookings-link",
    name: "bookings",
    path: <LiaCalendarAltSolid />,
  },
  {
    id: "apartments-link",
    name: "apartments",
    path: <BsBuildingsFill />,
  },
  {
    id: "users-link",
    name: "users",
    path: <FaUsers />,
  },
  {
    id: "settings-link",
    name: "settings",
    path: <FaGear  />,
  },
];
