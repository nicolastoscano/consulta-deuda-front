import { useContext, useEffect } from "react";
import AppointmentCard from "../components/AppointmentCard";
import appointments from "../solo-demo/turnos.json";
import { UserContext } from "../context/UserContext";

function UserAppointments() {
  useEffect(() => {
    document.title = "Pagos - Consulta app";
  }, []);

  const { user, setIsUser, isUser } = useContext(UserContext);

  return (
    <div className="flex flex-col gap-4 p-5 items-center mb-20">
      {isUser ? (
        appointments.map((appointment) => <AppointmentCard {...appointment} />)
      ) : (
        <h1>Debes iniciar sesion para ver sus turnos reservados</h1>
      )}
    </div>
  );
}

export default UserAppointments;
