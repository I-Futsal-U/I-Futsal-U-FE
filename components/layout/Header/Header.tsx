import HeaderInputBar from "./HeaderInputBar";
import HeaderLogin from "./HeaderLogin";
import HeaderLogo from "./HeaderLogo";
import HeaderMypage from "./HeaderMypage";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 flex flex-row justify-start md:justify-between -ml-3 md:ml-0 items-center bg-gray-900 h-20 opacity-90 w-full">
        <HeaderLogo />
        <HeaderInputBar />
        <HeaderLogin />
        <HeaderMypage />
      </div>
    </>
  );
}
