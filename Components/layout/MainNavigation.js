import classes from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>  </div>
      <nav>
        <ul>
          <li>
            <Link href="/"> My trips </Link>
          </li>
          <li>
            <Link href="/new-meetup"> Where have you been? </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
