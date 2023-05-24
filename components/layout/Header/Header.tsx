import HeaderInputBar from "./HeaderInputBar";
import HeaderLogin from "./HeaderLogin";
import HeaderLogo from "./HeaderLogo";
import HeaderMypage from "./HeaderMypage";

export default function Header() {
  return (
    <header className="fixed top-0 flex flex-row justify-start md:justify-between md:ml-0 items-center bg-gray-900 h-20 opacity-90 w-full">
      <HeaderLogo />
      <HeaderInputBar />
      <HeaderLogin />
      <HeaderMypage />
    </header>
  );
}
