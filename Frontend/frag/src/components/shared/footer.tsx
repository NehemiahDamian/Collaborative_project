import { Link } from "@tanstack/react-router";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { footerLink, footerInfoLinks, footerSocials } from "@/data/footer";
import { footerText } from "@/data/footer";

export const Footer = () => {
  return (
    <footer className="bg-[#222229] text-white py-8 m-0 p-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1.2fr_1fr] gap-8 px-4 pt-4">
        <div className="w-full max-w-[350px]">
          <h1 className="font-gothic uppercase font-medium text-2xl mb-3">
            {footerText.newsletter.heading}
          </h1>
          <p>{footerText.newsletter.description}</p>
          <div className="flex w-full max-w-sm items-center gap-2 mt-8">
            <Input type="email" placeholder="Email" />
            <Button
              type="submit"
              variant="outline"
              className="bg-white text-black hover:bg-gray-200 transition-colors"
            >
              {footerText.newsletter.buttonText}
            </Button>
          </div>
        </div>
        <div>
          <h1 className="font-gothic font-medium text-2xl uppercase mb-3">
            {footerText.quickLinksHeading}
          </h1>
          <ul className="space-y-2">
            {footerLink.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="font-gothic font-medium text-2xl uppercase mb-3">
            {footerText.informationHeading}
          </h1>
          <ul>
            {footerInfoLinks.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  to={item.href}
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <h1 className="font-gothic font-medium text-2xl uppercase mb-3">
            {footerText.socialsHeading}
          </h1>
          <ul className="flex space-x-4">
            {footerSocials.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="font-gothic font-medium text-2xl uppercase mb-3">
            {footerText.writeUs.heading}
          </h1>
          <p>{footerText.writeUs.email}</p>
        </div>
        <div>
          <h1 className="font-gothic font-medium text-2xl uppercase mb-3">
            {footerText.findUs.heading}
          </h1>
          <p>{footerText.findUs.text}</p>
        </div>
      </div>

      <div className="relative text-center leading-[0.85] m-0 p-0 mt-8 overflow-x-auto">
        <Separator className="my-1" />
        <div className="relative inline-block w-full min-w-[320px]">
          <h1 className="font-ubuntu font-medium text-[80vw] md:text-[250px] lg:text-[450px] relative z-10 whitespace-nowrap">
            {footerText.branding.title}
          </h1>
          <div className="pointer-events-none absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-[#222229] to-transparent z-20" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-[#222229] to-transparent z-20" />
        </div>
        <Separator className="my-1" />
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1.2fr_1fr] gap-8 px-4 mt-4">
        <div>
          <p>{footerText.branding.copyright}</p>
        </div>
        <div>Language</div>
        <div>Back to up</div>
      </div>
    </footer>
  );
};
