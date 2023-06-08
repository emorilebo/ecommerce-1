import { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  })
}, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={`${
      isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}>
      <div className="flex container items-center mx-auto justify-between h-full">

      <Link>
      <div className="">
        <img className="w-[40px]" src={Logo} alt="" />
      </div>
      </Link>
        <div 
        onClick={handleIsOpen} className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
