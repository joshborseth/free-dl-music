import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import Link from "next/link";
const DesktopNav = () => {
  return (
    <header className="navbar w-full bg-base-300">
      <div className="flex-none md:hidden">
        <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <h1 className="mx-2 flex-1 px-2">
        <Link href="../">Free Drumline Music</Link>
      </h1>
      <nav className="hidden flex-none md:block">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="browse" className="rounded">
              Browse Music
            </Link>
          </li>
          <li>
            <Link href="about" className="rounded">
              About <GrContactInfo />
            </Link>
          </li>
          <li>
            <Link href="contribute" className="rounded">
              Contribute Music <MdOutlineLibraryMusic />
            </Link>
          </li>
          <li>
            <Link href="search" className="rounded">
              Search <AiOutlineSearch />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNav;
