import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { HiArrowRight } from 'react-icons/hi';

const currentYear = new Date().getFullYear();

export default function FooterSection(): JSX.Element {
  return (
    <Footer container={true}>
      <div className="container mx-auto my-24 w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
            <a
              href="https://www.1hotels.com/central-park"
              target="_blank"
              rel="noopener"
            >
              <div className="flex gap-2 align-middle">
                <span>1 HOTEL CENTRAL PARK</span>
                <span className="mt-1">
                  <HiArrowRight />
                </span>
              </div>
            </a>
          </span>
        </div>
        <Footer.Divider />
        <div className="flex w-full items-center justify-between">
          <Footer.Copyright
            href="https://olegchursin.com"
            by="olegchursin"
            year={currentYear}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/1hotelcentralpark/"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/1hotel.centralpark/"
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
