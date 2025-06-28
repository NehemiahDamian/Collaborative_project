import { Link } from "@tanstack/react-router";
import { navLeftList, navRightList } from "@/data/navbar";

export const Navbar = () => {
  return (
    <header className="bg-amber-50 border-b-2 border-black">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4 px-4">
          {navLeftList.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-md font-semibold text-black hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <Link
            to="/"
            className="border-r-1 flex flex-1 items-center gap-2.5 border-white text-2xl font-bold text-black"
          >
            LOGO
            {/* <Logo className="h-6" /> */}
            {/* 
          <Separator
            orientation="vertical"
            className="border-1 hidden h-[32px] border-white lg:block"
          />
          <ProjectLogo className="h-6" /> */}
          </Link>
        </div>
        <div className="flex items-center gap-4 px-4">
          {navRightList.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-md font-semibold text-black hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
