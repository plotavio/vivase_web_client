import { JSX } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ApplicationRoutes } from "../utils/navigation/applicationRoutes";

export const AppRoutes = () => {
  const privateRoutes: {
    route: string;
    element: JSX.Element;
  }[] = [
    {
      route: ApplicationRoutes.PRE_VIDEO_CALL,
      element: <h1>Introdução</h1>,
    },
    {
      route: ApplicationRoutes.VIDEO_CALL,
      element: <h1>Pré Video Chamada</h1>,
    },
  ];

  return (
    <Routes>
      {privateRoutes.map(({ element, route }) => (
        <Route key={route} path={route} element={element} />
      ))}
    </Routes>
  );
};
