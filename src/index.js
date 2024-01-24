import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import DebtForm from "./routes/DebtForm";
import Register from "./routes/Register";
import Payments from "./routes/UserPayments";
import Login from "./routes/Login";
import Tramites from "./routes/Tramites";
import Home from "./routes/Home";
import Servicios from "./routes/Services";
import AppointmentForm from "./routes/AppointmentForm";
import UserProvider from "./context/UserContext";
import UserAppointments from "./routes/UserAppointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/consulta",
        element: <DebtForm />,
      },
      {
        path: "/registrarse",
        element: <Register />,
      },
      {
        path: "/pagos",
        element: <Payments />,
      },
      {
        path: "/ingresar",
        element: <Login />,
      },
      {
        path: "/tramites",
        element: <Tramites />,
      },
      {
        path: "/servicios",
        element: <Servicios />,
      },
      {
        path: "/turnos",
        element: <AppointmentForm />,
      },
      {
        path: "/misturnos",
        element: <UserAppointments />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
