const MobileNav = () => {
  return (
    <nav className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu relative w-[65%] bg-base-100 p-4">
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Contribute Music</a>
        </li>
        <li>
          <a>Search</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
