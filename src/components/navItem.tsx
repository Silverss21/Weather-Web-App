import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { DrawerClose } from './ui/drawer';

interface NavItemProps {
  link: string;
  children: React.ReactNode;
}

export const NavItem = ({ link, children }: NavItemProps) => {
  return (
    <Link to={link}>
      <DrawerClose className="w-full text-white  hover:text-black">
        <Button
          className="w-full text-white  hover:text-black"
          variant={'ghost'}
        >
          {children}
        </Button>
      </DrawerClose>
    </Link>
  );
};
