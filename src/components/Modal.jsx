import { useSelector } from "react-redux";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Modal({ handleOppen }) {
  const { ordered, priceTotal } = useSelector((state) => state.orders);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white py-6 px-2 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <IoMdCheckmarkCircleOutline className="text-[#1EA575] w-12 h-12 mb-6" />
        <h1 className="font-bold text-3xl">Order Confirmed</h1>
        <p className="opacity-70 mb-8">We hope you enjoy your food!</p>
        <div className="mb-8 max-h-60 overflow-y-auto">
          {ordered?.map((order) => {
            return (
              <div key={order.id}>
                <div className="flex justify-between items-center mb-4 border-b pb-4">
                  <div className="flex gap-3">
                    <img
                      className="w-16 rounded-xl"
                      src={order.image.thumbnail}
                      alt=""
                    />
                    <div className="flex flex-col justify-between py-2">
                      <h3 className="font-semibold">{order.name}</h3>
                      <p className="flex gap-3">
                        <span>{order.amount}x</span>{" "}
                        <span className="opacity-70">
                          {" "}
                          @ ${order.price.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold">
                    ${(order.amount * order.price).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
          <p className="flex justify-between items-center">
            <span>Order Total: </span>{" "}
            <span className="text-xl font-semibold">
              {" "}
              ${priceTotal.toFixed(2)}
            </span>
          </p>
        </div>
        <button
          onClick={handleOppen}
          className="group block w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          href="#"
        >
          <span className="block text-center rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
            Start New Order
          </span>
        </button>
      </div>
    </div>
  );
}

export default Modal;
