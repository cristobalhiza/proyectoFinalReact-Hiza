import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import useCollectionItems from "../../hooks/useCollectionItems";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const NavBarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { items: products, loading, error } = useCollectionItems("products");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      const uniqueCategories = Array.from(new Set(products.flatMap(product =>
        Array.isArray(product.category) ? product.category : []
      )));
      setCategories(uniqueCategories);
    }
  }, [products, loading, error]);

  const navigation = [
    { title: "Inicio", path: "/" },
    { title: "Productos", path: "/products" },
    { title: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="bg-custom-blue w-full fixed top-0 left-0 right-0 opacity-90 z-10 border border-solid border-white">
      <div className="flex items-center justify-evenly md:justify-between max-w-screen-xl mx-auto h-16 md:px-8">
        <Link className="text-white justify-self-start" to="/">
          <h1 className="text-3xl ml-4">Court Corner</h1>
        </Link>
        <div className="md:hidden flex items-center order-5 md:order-1">
          <ButtonComponent
            className="p-2 rounded-md focus:border-gray-400 focus:border font-bold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
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
          </ButtonComponent>
          <div className="ml-4 mr-4">
            <CartWidgetComponent />
          </div>
        </div>
        <div
          className={`flex justify-self-center justify-end pb-3 absolute md:static md:block md:pb-0 md:mt-0 top-16 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="justify-self-end bg-custom-blue py-4 pb-0 md:p-0 shadow-xl md:shadow-none md:mt-0 md:static md:flex md:space-x-6 md:space-y-0 w-screen md:w-auto border-y border-white md:border-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-white hover:text-gray-300 text-center border-b md:border-0 py-2">
                <Link className="text-white text-base md:text-lg" to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="text-white hover:text-gray-30 text-center md:border-0 py-2">
              <button
                className="inline-flex items-center text-white bg-custom-blue h-full text-base md:text-lg"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                Categorías
                <svg
                  className="ml-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`absolute z-10 md:mt-2 md:w-28 origin-top-right shadow-lg w-screen ${
                  isCategoriesOpen ? "block" : "hidden"
                }`}
              >
                <div className="md:py-1 border-b border-white md:border-0">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/category/${category}`}
                      className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-custom-blue bg-custom-blue"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
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