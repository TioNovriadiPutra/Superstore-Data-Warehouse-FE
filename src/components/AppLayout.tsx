import { Link, Outlet, useLocation } from "react-router";
import Flex from "./Flex";
import DropdownButton from "./DropdownButton";
import { useLinearFilter } from "../stores/page.store";
import { queryClient } from "../utils/config/client";

const AppLayout = () => {
  const linearFilter = useLinearFilter();

  const { pathname } = useLocation();

  return (
    <Flex className="flex-1">
      <Flex className="flex-row! items-center justify-between p-6 border-b border-b-neutral-200">
        <Flex className="flex-row! items-center gap-5">
          <Link
            to="/"
            className={`text-sm font-medium ${pathname === "/" ? "text-neutral-800" : "text-neutral-500"} hover:text-neutral-800 transition-colors duration-300`}
          >
            Dashboard
          </Link>

          <Link
            to="/detail"
            className={`text-sm font-medium ${pathname === "/detail" ? "text-neutral-800" : "text-neutral-500"} hover:text-neutral-800 transition-colors duration-300`}
          >
            Detail
          </Link>
        </Flex>

        <DropdownButton
          data={[
            {
              label: "Bulanan",
              value: "monthly",
            },
            {
              label: "Tahunan",
              value: "yearly",
            },
          ]}
          value={linearFilter.data}
          onPick={(data) => {
            linearFilter.onChange(data);
            queryClient.invalidateQueries({ queryKey: ["getTrend", "getKPI"] });
          }}
        />
      </Flex>

      <Outlet />
    </Flex>
  );
};

export default AppLayout;
