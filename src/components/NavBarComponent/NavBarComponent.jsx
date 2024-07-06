import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";
import useCollectionItems from "../../hooks/useCollectionItems";

const NavBarComponent = () => {
  const [state, setState] = useState(false);
  const { items: products, loading, error } = useCollectionItems("products");

  const categories = Array.from(new Set(products.flatMap(product => 
    Array.isArray(product.category) ? product.category : []
  )));

  console.log('Categorías obtenidas:', categories);

  const navigation = [
    { title: "Inicio", path: "/" },
    { title: "Productos", path: "/products" },
    { title: "Contacto", path: "/contact" },
  ];

  return (
    <nav className="bg-custom-blue w-full border-b md:border-0 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between px-4 max-w-screen-xl mx-auto h-16 md:px-8">
        <Link className="text-white" to="/">
          <h1 className="text-3xl">Court Corner</h1>
        </Link>
        <div className="md:hidden">
          <button
            className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-white hover:text-gray-300">
                <Link className="text-white" to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
            {!loading && !error && categories.length > 0 && (
              <li className="relative inline-block text-left text-white hover:text-gray-300">
                <Menu>
                  <MenuButton className="inline-flex items-center text-white hover:text-gray-300 bg-custom-blue">
                    Categorías
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5 text-white hover:text-gray-300 bg-custom-blue"
                      aria-hidden="true"
                    />
                  </MenuButton>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-custom-blue shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {categories.map((category, index) => (
                        <MenuItem key={index}>
                          {({ active }) => (
                            <Link
                              to={`/category/${category}`}
                              className={`block px-4 py-2 text-sm ${
                                active ? "bg-gray-700 text-white" : "text-white"
                              }`}
                            >
                              {category}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>
              </li>
            )}
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-5 text-white">
          <CartWidgetComponent />
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
