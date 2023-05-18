import HeaderInputBar from "./HeaderInputBar";
import HeaderLogin from "./HeaderLogin";
import HeaderLogo from "./HeaderLogo";
import HeaderMypage from "./HeaderMypage";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 display: flex flex-nowrap justify-between items-center bg-gray-900 h-20 opacity-90 w-full">
        <HeaderLogo />
        <HeaderInputBar />
        <HeaderLogin />
        <HeaderMypage />
      </div>
    </>
  );
}
