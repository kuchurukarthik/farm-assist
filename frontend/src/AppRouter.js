import { Route, Routes } from "react-router-dom";
import { DefaultRoutes } from "./AppRoutes";

function AppRouter() {
  return (
    <Routes>
      {DefaultRoutes.map((route, key) => (
        <Route key={key} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default AppRouter;
