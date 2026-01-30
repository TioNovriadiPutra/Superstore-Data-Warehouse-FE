import { Link, Outlet, useLocation } from "react-router";
import Flex from "./Flex";

const AppLayout = () => {
  const { pathname } = useLocation();

  return (
    <Flex className="flex-1">
      <Flex className="flex-row! items-center p-6 border-b border-b-neutral-200 gap-5">
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

      <Outlet />
    </Flex>
  );
};

export default AppLayout;
