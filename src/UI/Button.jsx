import { Link } from 'react-router-dom';

function Button({ children, disabled = false, to, type }) {
  const base = `focus:ring-yellow mt-2 inline-block rounded-full 
  bg-yellow-400  font-semibold uppercase 
  tracking-wide text-stone-800 transition-colors 
  duration-300 hover:bg-yellow-300 focus:outline-none 
  focus:ring focus:ring-yellow-300 focus:ring-offset-2 
  disabled:cursor-not-allowed disabled:bg-slate-600`;
  const styles = {
    primary: base + ` md:px-6 md:py-4 px-4 py-3`,
    small:
      base + ` py-1 md:px-2.5 px-4 md:py-2.5 text-xs rounded-[50%] h-8 w-8`,
    secondary: `focus:ring-yellow mt-2 inline-block rounded-full 
      border-2 border-stone-300 font-semibold uppercase 
      tracking-wide text-stone-800 transition-colors 
      duration-300 hover:bg-stone-200 focus:outline-none 
      focus:ring focus:ring-stone-200 focus:ring-offset-2 
      disabled:cursor-not-allowed disabled:bg-slate-600 md:px-6 md:py-4 px-2.5 py-3`,
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
export default Button;
