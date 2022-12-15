import Link from "next/link";
const MobileNav = () => {
  return (
    <nav className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu relative w-[65%] bg-base-100 p-4">
        <li>
          <Link href="about">About Us</Link>
        </li>
        <li>
          <Link href="contribute">Contribute Music</Link>
        </li>
        <li>
          <Link href="search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
