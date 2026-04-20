import { Link } from 'react-router-dom';

const variantClasses = {
  primary:
    'bg-pink-400 text-white hover:bg-pink-300 border-transparent shadow-sm hover:shadow-md',
  secondary:
    'bg-white text-pink-600 border-pink-400 hover:bg-pink-50 shadow-sm hover:shadow-md',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition duration-200',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
