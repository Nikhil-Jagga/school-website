import { Menu, ShieldClose } from "lucide-react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "../atoms/Logo";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export interface Props {
  page: string;
  selectedPage: string;
  setSelectedPage: (lowerCasePage: string) => void;
}

export function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-purple" : ""
      } hover:text-purple transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setIsScrolled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`z-40 w-full fixed top-0 py-6 bg-white shadow-md`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <AnchorLink href="#landing">
          <Logo />
        </AnchorLink>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-12 ">
            <AnchorLink href="#about" className="hover:text-blue-500">
              About
            </AnchorLink>
            <AnchorLink href="#academics" className="hover:text-blue-500">
              Academics
            </AnchorLink>
            <AnchorLink href="#admissions" className="hover:text-blue-500">
              Admissions
            </AnchorLink>
            <AnchorLink href="#faculty" className="hover:text-blue-500">
              Faculty
            </AnchorLink>
            <AnchorLink href="#students" className="hover:text-blue-500">
              Students
            </AnchorLink>
            <AnchorLink href="#contact" className="hover:text-blue-500">
              Contact
            </AnchorLink>
          </div>
        ) : (
          <button
            className="rounded-md p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Menu />
          </button>
        )}
      </div>
      {!isAboveSmallScreens && isMenuToggled && (
        <div className="fixed right-0 top-0 h-full bg-gray-400  w-[300px] z-50">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <ShieldClose color="white" />
            </button>
          </div>
          <div className="flex flex-col gap-8 ml-[33%] text-xl  mt-8">
            <AnchorLink href="#landing" className="hover:text-gray-300">
              Home
            </AnchorLink>
            <AnchorLink href="#about" className="hover:text-gray-300">
              About Us
            </AnchorLink>
            <AnchorLink href="#academics" className="hover:text-gray-300">
              Academics
            </AnchorLink>
            <AnchorLink href="#admissions" className="hover:text-gray-300">
              Admissions
            </AnchorLink>
            <AnchorLink href="#students" className="hover:text-gray-300">
              Students
            </AnchorLink>
            <AnchorLink href="#faculty" className="hover:text-gray-300">
              Faculty
            </AnchorLink>
            <AnchorLink href="#contact" className="hover:text-gray-300">
              Contact Us
            </AnchorLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
