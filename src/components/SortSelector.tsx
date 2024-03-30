import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectedSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}
const SortSelector = ({ onSelectedSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currenOrder = sortOrders.find((order) => order.value === selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by: {currenOrder?.label || "order by..."}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectedSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
