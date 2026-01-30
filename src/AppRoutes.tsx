import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./components/AppLayout";
import Detail from "./pages/Detail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
