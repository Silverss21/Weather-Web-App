import Navigation from './navigation';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex backdrop-blur-xl rounded-3xl h-16 ">
      <Navigation />
      <h1 className="w-full flex justify-center items-center text-3xl mt-4 text-white">
        {title}
      </h1>
    </div>
  );
};

export default Header;
