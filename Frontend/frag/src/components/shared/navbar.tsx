import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLeftList, navRightList, sheetNavList } from "@/data/navbar";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#FAF9F5] border-b-2 border-black">
      <div className="flex items-center justify-between p-4">
        <div className="hidden md:flex container items-center gap-4 px-4">
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
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 px-4">
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
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px] pl-4">
              <div className="flex flex-col space-y-6 mt-8">
                {sheetNavList.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* {isAuthenticated ? (
                    <>
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-500 mb-2">
                          Signed in as
                        </p>
                        <p className="font-medium">
                          {user?.firstName} {user?.lastName}
                        </p>
                      </div>
                      <Link
                        to="/profile"
                        className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Profile
                      </Link>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          signOut();
                          setIsOpen(false);
                        }}
                        className="justify-start p-0 text-xl font-medium text-red-600 hover:text-red-700"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <div className="border-t pt-4 space-y-4">
                      <Link
                        to="/auth/signin"
                        className="block text-xl font-medium text-gray-600 hover:text-black transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/auth/signup"
                        className="block text-xl font-medium text-black hover:text-gray-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </div>
                  )} */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
