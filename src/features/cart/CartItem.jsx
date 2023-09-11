import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import { increaseByOne, reduceByOne } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={() => dispatch(increaseByOne(pizzaId))}>
          +
        </Button>
        <Button type="small" onClick={() => dispatch(reduceByOne(pizzaId))}>
          -
        </Button>
        <DeleteItem pizzaId={pizzaId}>Delete</DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
