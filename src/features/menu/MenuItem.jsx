import Button from '../../UI/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img
        src={imageUrl}
        alt={name}
        className={`m-1 h-72 w-80 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-col pt-2">
        <div className="flex justify-between sm:px-0">
          <p className="font-medium">{name}</p>
          {soldOut ? '' : <Button type="small">+</Button>}
        </div>
        <div className="pt-4">
          <p className="text-sm italic text-stone-500">
            {ingredients.join(', ')}
          </p>
          <div className="mt-auto pt-2">
            {!soldOut ? (
              <p className="text-sm">{formatCurrency(unitPrice)}</p>
            ) : (
              <p className="text-sm font-medium uppercase text-stone-500">
                Sold out
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
