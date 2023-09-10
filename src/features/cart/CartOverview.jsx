import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return null;
  return (
    <div className="animate-slow-rise flex translate-y-0 transform items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 transition-transform ease-linear sm:px-6 md:text-base">
      <p className=" space-x-4 font-semibold text-stone-300 sm:space-x-2">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
