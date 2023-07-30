import React from "react";
import { SocialIcon } from "react-social-icons";

const footerLinks = [
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Privacy", href: "/privacy", current: false },
  { name: "Terms", href: "/terms", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse pb-5 pt-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="mt-4 text-center text-sm text-gray-400 sm:order-1 sm:mt-0 sm:text-left">
            &copy; {new Date().getFullYear()} Sonic Workshop. All rights
            reserved.
          </div>
          <div className="mx-2 flex justify-center space-x-4 sm:order-2">
            <SocialIcon
              url="http://twitter.com/sonicworkshop"
              style={{ height: 25, width: 25 }}
              bgColor="#808080"
            />
            <SocialIcon
              url="http://facebook.com/sonicworkshop"
              style={{ height: 25, width: 25 }}
              bgColor="#808080"
            />
            <SocialIcon
              url="http://linkedin.com/in/sonicworkshop"
              style={{ height: 25, width: 25 }}
              bgColor="#808080"
            />
            <SocialIcon
              url="https://github.com/JustinSixsmith/sonic-workshop"
              style={{ height: 25, width: 25 }}
              bgColor="#808080"
            />
          </div>
          <div className="mt-4 flex justify-center space-x-4 pb-3 sm:order-3">
            {footerLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium",
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
