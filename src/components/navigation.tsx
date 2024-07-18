import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';
import { Button } from './ui/button';

import AddLocation from './add-location';
import { NavItem } from './navItem';
import { Divider } from './divider';
import CitiesList from './citiesList';

import { useCities } from '../hooks/CityContext';

import {
  ArrowLeftIcon,
  GearIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { cities, clearAll, removeCity } = useCities();

  return (
    <div className="absolute ">
      <Drawer direction="left">
        <DrawerTrigger>
          <Button className="bg-primary p-4 m-4 border">
            <HamburgerMenuIcon className="h-6 w-6 text-white" />
          </Button>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay className="fixed inset-0 bg-black/20" />
          <DrawerContent
            aria-describedby={undefined}
            className="bg-primary border-primary flex flex-col rounded-t-[10px] h-full w-[400px] mt-24 fixed bottom-0 right-0"
          >
            <div className="p-4 flex-1 h-full">
              <div className="max-w-md mx-auto">
                <DrawerHeader>
                  <DrawerClose>
                    <div className="flex justify-between w-full">
                      <Link to="/settings">
                        <Button className="bg-transparent hover:bg-white">
                          <GearIcon className="h-6 w-6 text-white hover:text-black" />
                        </Button>
                      </Link>
                      <Button variant="destructive">
                        <ArrowLeftIcon className="h-6 w-6" />
                      </Button>
                    </div>
                  </DrawerClose>
                  <DrawerTitle></DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col gap-4">
                  <NavItem link="/about-us">About us</NavItem>
                  <NavItem link="/contact-us">Contact us</NavItem>
                  <Divider color="white" />
                  <CitiesList
                    cities={cities}
                    clearAll={clearAll}
                    removeCity={removeCity}
                  />

                  <AddLocation />
                </div>
              </div>
            </div>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </div>
  );
};

export default Navigation;
