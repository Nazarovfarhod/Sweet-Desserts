//react imports
import { useEffect, useState } from "react";
//react icons
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

//redux
import { useDispatch } from "react-redux";
import { incrementOrder, decrementOrder } from "../features/dessertSlise";

function Card({ dessert }) {
  const [addButtons, setAddButtons] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dessert.amount === 0) {
      setAddButtons(false);
    }
  }, [dessert.amount]);
  return (
    <div className="block rounded-lg  shadow-sm shadow-indigo-100 mb-7">
      <div className="relative mb-10">
        <img
          alt=""
          src={dessert.image.mobile}
          className="h-56 w-full rounded-md object-cover"
        />
        <div className=" hover:shadow-md active:shadow-none  bottom-[-25px] left-20  rounded-[25px] bg-white border border-[#AD8A85] absolute">
          {!addButtons && (
            <button
              onClick={() => {
                setAddButtons(true);
                dispatch(incrementOrder(dessert.id));
              }}
              type="button"
              className="flex items-center gap-2 py-3 px-7"
            >
              <span>
                <MdOutlineAddShoppingCart />
              </span>
              <h2>Add to Cart</h2>
            </button>
          )
        }
          {addButtons && (
            <div className="flex gap-3 py-3 px-7 rounded-[25px] duration-300 bg-[#C73B0F] items-center justify-center">
              <button onClick={() => dispatch(incrementOrder(dessert.id))}>
                <AiFillPlusCircle className="w-6 h-6 text-white" />
              </button>
              <span className="text-white">{dessert.amount} </span>
              <button onClick={() => dispatch(decrementOrder(dessert.id))}>
                <AiFillMinusCircle className="w-6 h-6 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">{dessert.category}</dd>
          </div>

          <div>
            <dd className="font-medium">{dessert.name}</dd>
            <dd>${dessert.price.toFixed(2)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Card;
