import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="grid sm:grid-cols-[auto_auto] sm:gap-1 lg:grid-cols-[1fr_1fr_1fr] lg:gap-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
