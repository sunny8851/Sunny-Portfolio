import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-scroll";
const Header = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  // console.log(props);
  return (
    <div className="h-14 pt-2 z-10 fixed w-full top-0 items-center  text-white bg-black">
      <div className="justify-between flex  px-2 text-center">
        <div className="text-2xl sm:ml-5">Sunny Kumar Ray</div>
        {windowSize[0] > 810 ? (
          <div className="flex gap-6 mr-5 mt-2">
            {items.map((m: any) => (
              <Link
                // activeClass="active"
                to={m.name.split(" ")[0]}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <div className="cursor-pointer hover:text-[#DC7633]">
                  {m.name}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-1">
            <MenuIcon
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {items.map((m: any) => (
                <Link
                  to={m.name.split(" ")[0]}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  <MenuItem onClick={handleClose}>{m.name}</MenuItem>
                </Link>
              ))}
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
const items = [
  { name: "Home", height: 0 },
  { name: "About", height: 650 },
  { name: "Skills", height: 100 },
  { name: "Projects", height: 100 },
  { name: "Journey", height: 100 },
  { name: "achievement", height: 100 },
  { name: "Contact me", height: 100 },
];
