import PaymentCard from "../components/PaymentCard";
import payments from "../solo-demo/DBPagos.json";

function Payments() {
  return (
    <div className="flex flex-col gap-4 p-5 items-center">
      {payments.map((payment) => (
        <PaymentCard {...payment} />
      ))}
    </div>
  );
}

export default Payments;
