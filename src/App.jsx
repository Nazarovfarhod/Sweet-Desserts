// components
import { useEffect } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

import { useDispatch, useSelector } from "react-redux";
import { addAllDesserts } from "./features/dessertSlise";

// custom hooks
import { useFetch } from "./hooks/useFetch";

function App() {
  const dispatch = useDispatch();
  const { allDesserts } = useSelector((state) => state.orders);
  const { data } = useFetch(
    "https://online-json-server-api.up.railway.app/project/66a1cfb31d2cd3eb11449e3c/desserts"
  );

  useEffect(() => {
    dispatch(addAllDesserts(data));
  }, [data]);

  return (
    <div className="flex gap-8 px-4 flex-col bg-[#FCF8F6] lg:flex-row py-20">
      <div>
        <ProductList allDesserts={allDesserts} />
      </div>
      <Cart />
    </div>
  );
}

export default App;
