import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <header>
        <div className="container py-4 flex">
          <div className="w-1/3 flex justify-start items-center">
            <Link href={"/"} className="text-3xl font-medium">
              Bober
            </Link>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <nav className="space-x-4 text-xl">
              <Link href={"/"}>Headphone</Link>
              <Link href={"/"}>Keyboard</Link>
              <Link href={"/"}>Mouse</Link>
            </nav>
          </div>
          <div className="w-1/3 flex justify-end items-center text-xl">
            <Link href={"/cart"}>Cart</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
