//react imports
import { useState } from "react";
//redux imports
import { useSelector, useDispatch } from "react-redux";
//react icons
import { TiDeleteOutline } from "react-icons/ti";
//components
import Modal from "./Modal";

const Cart = () => {
  const [oppen, setOppen] = useState(false);
  const dispatch = useDispatch();
  const { ordered, orderTotal, clearOrder, priceTotal } = useSelector(
    (state) => state.orders
  );
  const handleOppen = () => {
    setOppen(!oppen);
  };

  return (
    <div className="bg-white relative rounded-2xl lg:w-1/3 p-6">
      <h1 className="text-4xl w-full mb-5 text-[#C73B0F] font-bold">
        Your Cart ({orderTotal}){" "}
      </h1>
      {ordered?.map((order) => {
        return (
          <div
            key={order.id}
            className="flex items-center justify-between mb-3"
          >
            <div>
              <h2>{order.name}</h2>
              <p>
                {order.amount}x <span>@{order.price.toFixed(2)}$</span>{" "}
                <span>${(order.amount * order.price).toFixed(2)}</span>
              </p>
            </div>
            <button type="button" onClick={clearOrder}>
              <TiDeleteOutline className="w-7 h-7" />
            </button>
            {oppen && <Modal handleOppen={handleOppen} />}
          </div>
        );
      })}
      <div className="mb-10">
        <h3 className="flex justify-between items-center mt-5">
          <span className="font-semibold">Order Total:</span>{" "}
          <span className="font-bold text-2xl ">${priceTotal.toFixed(2)} </span>
        </h3>
      </div>
      <button
        onClick={handleOppen}
        className="group block w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="#"
      >
        <span className="block text-center rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
          Confirm Order
        </span>
      </button>
    </div>
  );
};

export default Cart;
