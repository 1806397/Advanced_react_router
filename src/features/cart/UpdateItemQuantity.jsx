import { useSelector } from 'react-redux';

function UpdateItemQuantity({ pizzaId }) {
  const cart = useSelector((state) => state.cart.cart);
  const item = cart.find((item) => item.pizzaId === pizzaId);
  console.log(item);
  if (!item) return null;
  return <div className="pt-2 font-semibold">{item.quantity}</div>;
}
export default UpdateItemQuantity;
