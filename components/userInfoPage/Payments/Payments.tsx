import PaymentsItem from "../../common/Item/PaymentsItem/PaymentsItem";
import Layout from "../layout";

export default function Payments() {
  return (
    <Layout title="결제 내역" href="/userInfo/paymentsDetail">
      <PaymentsItem />
    </Layout>
  );
}
