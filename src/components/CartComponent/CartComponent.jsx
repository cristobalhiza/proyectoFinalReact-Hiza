import { useState } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import useOrder from "../../hooks/useOrder";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const CartComponent = ({ open, setOpen }) => {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();
  const { createOrder } = useOrder();

  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleRemoveFromCart = (productId) => {
    Swal.fire({
      text: "¿Desea eliminar el artículo del carro?",
      showCancelButton: true,
      confirmButtonColor: "#002F6C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(productId);
        Swal.fire({
          text: "El producto ha sido eliminado del carro.",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity === 1) {
      handleRemoveFromCart(product.id);
    } else {
      addToCart(product, -1);
    }
  };

  const handleCreateOrder = async () => {
    try {
      await createOrder();
      Swal.fire({
        text: "¡La orden ha sido creada exitosamente!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      setOpen(false);
    } catch (error) {
      Swal.fire({
        text: "Hubo un error al crear la orden. Por favor, inténtelo de nuevo.",
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  return (
    <Transition show={open} as="div">
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <TransitionChild
          as="div"
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as="div"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-hidden bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-custom-blue">
                          Carrito de Compras
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Cerrar panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8 overflow-y-auto max-h-[40dvh]">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3 className="text-custom-blue">
                                        {product.name}
                                      </h3>
                                      <p className="ml-4 text-custom-blue">
                                        $
                                        {(
                                          product.price * product.quantity
                                        ).toFixed(2)}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Cant. {product.quantity}
                                    </p>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-base text-custom-blue bg-white border-none mr-2"
                                        onClick={() =>
                                          handleDecreaseQuantity(product)
                                        }
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        className="font-medium text-base text-custom-blue bg-white border-none"
                                        onClick={() => addToCart(product)}
                                      >
                                        +
                                      </button>
                                      <button
                                        type="button"
                                        className="font-medium text-base text-custom-blue bg-white border-none ml-4"
                                        onClick={() =>
                                          handleRemoveFromCart(product.id)
                                        }
                                      >
                                        Eliminar
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p className="text-custom-blue">
                          ${subtotal.toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        El envío y los impuestos se calculan al finalizar la
                        compra.
                      </p>
                      <div className="mt-6">
                        <ButtonComponent
                          onClick={handleCreateOrder}
                          className="flex items-center justify-center shadow-sm mx-10"
                        >
                          Finalizar Compra
                        </ButtonComponent>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          o{" "}
                          <button
                            type="button"
                            className="font-medium text-base text-custom-blue bg-white"
                            onClick={() => setOpen(false)}
                          >
                            Seguir Comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartComponent;
