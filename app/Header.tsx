import React from 'react';

function Header() {
  return (
    <header className="bg-stone-100 py-6">
      <nav className="center">
        <ul className="flex justify-center gap-8">
          <li>
            <a className="text-sm font-medium uppercase text-gray-500" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-sm font-medium uppercase text-gray-500" href="/">
              Users
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
