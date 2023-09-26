const photo =
  "data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 10.5L1.5 12l5 5L1 22.5V18l1.5-1.5M6.5 7L4 9.5 1 6V1.5L6.5 7zM7.767 15.5l3.733-3.733L8.233 8.5 4.5 12.233m4-.466l-2 2' stroke='%23E1E0E0'/%3E%3C/svg%3E";

const links = [
  {
    id: 0,
    name: "news",
  },
  {
    id: 1,
    name: "game info",
  },
  {
    id: 2,
    name: "commuinity",
    image: photo,
    drop: [
      {
        id: 0,
        name: "discord",
      },
    ],
  },
  {
    id: 3,
    name: "franchise",
    image: photo,
    drop: [
      {
        id: 0,
        name: "assassin's creed valhalla",
      },
      {
        id: 1,
        name: "assassin's creed odyssey",
      },
      {
        id: 2,
        name: "assassin's creed origins",
      },
      {
        id: 3,
        name: "all games",
      },
      {
        id: 4,
        name: "franchise",
      },
      {
        id: 5,
        name: "assassin's creed nexus vr",
      },
    ],
  },
  {
    id: 4,
    name: "help",
  },
];

export default links;
