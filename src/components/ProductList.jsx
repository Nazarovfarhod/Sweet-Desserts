// components
import Card from "./Card";

function ProductList({ allDesserts }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-[40px] mb-8 font-bold">Desserts</h1>
      <div className="flex flex-wrap gap-4">
        {allDesserts?.map((dessert) => (
          <Card key={dessert.id} dessert={dessert} />
          
        ))}
      </div>
    </div>
  );
}

export default ProductList;
