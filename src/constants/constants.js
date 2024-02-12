import { Icon } from "@iconify/react";

const SIDENAV_ITEMS = [
  {
    title: "Home",
    path: "/invoice",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Customer",
    path: "/invoice/add-customer",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Customer", path: "/invoice/add-customer" },
      { title: "All Customer", path: "/invoice/all-customer" },
    ],
  },
  {
    title: "Item",
    path: "/invoice/add-item",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Item", path: "/invoice/add-item" },
      { title: "All Item", path: "/invoice/all-item" },
    ],
  },
  {
    title: "Sales",
    path: "/invoice/add-sales",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Sales", path: "/invoice/add-sales" },
      { title: "All Sales", path: "/invoice/all-sales" },
    ],
  },
];

export default SIDENAV_ITEMS;
