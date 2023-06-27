import Cash from "./Cash";
import UserInfo from "./UserInfo";

export default function Profile() {
  return (
    <section className="w-full py-8 border-2 border-solid border-blue-300 rounded-2xl shadow-md">
      <UserInfo />
      <Cash />
    </section>
  );
}
