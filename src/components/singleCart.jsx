function singleCart({ ordered }) {
  return (
    <div>
      {ordered?.map((order) => {
        return (
          <div key={order.id}>
            <h1>{order.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default singleCart;
