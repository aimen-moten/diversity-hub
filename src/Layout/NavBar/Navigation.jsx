import classes from "./Navigation.module.css"
import drcfsIcon from "../../assets/web-icon.svg";
import Logo from "./Logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// , "Events", "About", "DatSets"

const headers = [
  // {
  //   id: 1,
  //   headerName: "Home",
  //   path: "/",
  // },
  // {
  //   id: 2,
  //   headerName: "About",
  //   path: "/about",
  // },
  // {
  //   id: 3,
  //   headerName: "Community",
  //   path: "/communities",
  // },
  // {
  //   id: 4,
  //   headerName: "Mentors",
  //   path: "/mentors",
  // },
  // {
  //   id: 5,
  //   headerName: "Hire Talent",
  //   path: "/hire",
  // },
  // {
  //   id: 6,
  //   headerName: "Job Board",
  //   path: "/jobs"

  // }

  {
      id: 6,
      headerName: "Home",
      path: "/",
  },
  {
    id: 5,
    headerName: "About Us",
    path: "/about",
  },
  {
    id: 1,
    headerName: "Community",
    path: "/communities",
  },
  {
    id: 3,
    headerName: "Job Board",
    path: "/jobs",
  },
  {
    id: 4,
    headerName: "Mentorship",
    path: "/mentors",
  },
  {
    id: 2,
    headerName: "Hire Talent",
    path: "/hire", 
  }
];

const NavigationBar = () => {
  const [clicked, setIsClicked] = useState(false);
  let width = window.innerWidth;

  const onClickHandler = () => {
    setIsClicked(!clicked);
  };

  //To check whether the user has clicked on the hamburger icon or not;

  const lineClass = clicked ? classes.change : classes.lineBox;

  //To Show the Nav List

  const navClass = clicked ? classes.nav1 : classes.navList;

  //To scroll to the top of the page
  const onNavClick = () => {
    window.scrollTo(0, 0);
    if (width <= 481) {
      setIsClicked(false);
    }
  };

  return (
    <nav className={classes.navBar}>
      <div className=" h-[10vh] md:w-[80%] w-[100%] flex flex-row justify-between items-center">
        <div className={classes.mobileBox}>
        <NavLink to={"/"} className={classes.imageIcon}>
          <img className={classes.img} src={Logo} alt="DRCFS Logo" />
        </NavLink>
      </div>
        <div className={lineClass} onClick={onClickHandler}>
          <div className={classes.line}></div>
        </div>
      </div>

      <div className={navClass}>
        <ul className={classes.ulList}>
          {headers.map((header) => {
            return (
              <div className={classes.liBox} key={header.id}>
                <NavLink
                  to={header.path}
                  onClick={onNavClick}
                  // to={header.path}
                  className={classes.navLink}
                >
                  <li>{header.headerName}</li>
                </NavLink>
              </div>
            );
          })}
        </ul>
        <button className={classes.button}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;