import { useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import Backdrop from "../UIElements/Backdrop";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function openDrawer() {
    setDrawerIsOpen(true);
  }

  function closeDrawer() {
    setDrawerIsOpen(false);
  }

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <SideDrawer onClick={closeDrawer} show={drawerIsOpen}>
        <nav className={styles["main-navigation__drawer-nav"]}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className={styles["main-navigation__menu-btn"]}
          onClick={openDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={styles["main-navigation__title"]}>
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className={styles["main-navigation__header-nav"]}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNavigation;
