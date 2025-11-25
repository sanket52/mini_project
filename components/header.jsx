import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <>
        <nav className="fixed top-0 left-0    right-0 bg-background/25 backdrop-blur-xl z-20 border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* logo */}
            <Link href={"/"} className="flex items-center"> 
            <Image
              src="/spott.png"
              alt="planora image"
              width={500}
              height={500}
              className="w-full h-11"
              priority
            />
            {/* pro badge */}
             </Link>
            {/* search and location */}

            {/* right side action */}
          </div>

          {/* mobile action and location below the header  */}
        </nav>

        {/* models */}
      </>
    </div>
  );
};

export default Header;
