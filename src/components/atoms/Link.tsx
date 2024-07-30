import AnchorLink from "react-anchor-link-smooth-scroll";
export interface Props {
  page: string;
  selectedPage: string;
  setSelectedPage: (lowerCasePage: string) => void;
}

export default function Link({ page, selectedPage, setSelectedPage }: Props) {
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
