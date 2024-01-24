import { useContext, useEffect } from "react";
import PaymentCard from "../components/PaymentCard";
import payments from "../solo-demo/DBPagos.json";
import { UserContext } from "../context/UserContext";

function Payments() {
  useEffect(() => {
    document.title = "Pagos - Consulta app";
  }, []);

  const { user, setIsUser, isUser } = useContext(UserContext);

  return (
    <div className="flex flex-col gap-4 p-5 items-center mb-20">
      {isUser ? (
        payments.map((payment) => <PaymentCard {...payment} />)
      ) : (
        <h1>Debes iniciar sesion para ver los pagos que has realizado</h1>
      )}
    </div>
  );
}

export default Payments;
