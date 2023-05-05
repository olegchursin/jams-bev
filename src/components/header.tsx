import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { FC } from 'react';
import { BiLinkExternal } from 'react-icons/bi';

const links = [
  {
    label: 'JAMS Website',
    url: 'https://www.1hotels.com/central-park/taste/jams'
  },
  {
    label: 'JAMS Menu',
    url: 'https://www.1hotels.com/central-park/taste/jams#menu'
  }
];

const Header: FC<Record<string, never>> = () => {
  return (
    <header className="sticky top-0 z-20 shadow-md">
      <Navbar>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap px-3 py-4 text-xl font-semibold dark:text-white">
            JAMS Cocktails
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse>
          {links.map(link => {
            return (
              <Navbar.Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener"
                className="flex gap-1 align-middle"
              >
                <span>{link.label}</span>
                &nbsp;
                <span className="mt-[3px]">
                  <BiLinkExternal />
                </span>
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
