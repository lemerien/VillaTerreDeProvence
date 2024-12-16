import { Link } from 'react-router-dom';

export function NavigationLinks({ navigation, textColor }) {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`
            text-base font-light tracking-wide px-10
            ${textColor}
            hover:opacity-75 transition-opacity
            relative after:absolute after:bottom-0 after:left-0 after:h-[1px] 
            after:w-0 hover:after:w-full after:bg-current 
            after:transition-all after:duration-300
          `}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}