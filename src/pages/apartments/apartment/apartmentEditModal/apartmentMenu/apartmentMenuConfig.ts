export const svgConfig = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ApartmentMenuConfig = [
  {
    name: "duplicate",
    path: [
      "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666",
      "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",
    ],
  },
  {
    name: "edit",
    path: [
      "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      "M13.5 6.5l4 4",
    ],
  },
  {
    name: "delete",
    path: [
      "M4 7l16 0",
      "M10 11l0 6",
      "M14 11l0 6",
      "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",
      "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",
    ],
  },
];