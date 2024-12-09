import React from "react";
import Link from "next/link";
import { FaBars } from 'react-icons/fa'
import { FiHome, FiInfo} from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";

const MobNav = () => {
  return (
    <div>
      <Link href="/">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <FaBars className='w-5 h-5'/>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="min-w-[12rem] py-4 px-3 w-auto rounded-md bg-primary text-white shadow-lg backdrop-blur-3xl">

            <Link href='/account'>   
            <DropdownMenuItem className="flex items-center gap-4">
                <span><FiHome className="w-6 h-6" /></span>
                <span><Link href='/'>Home</Link></span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-4">
                <span><LuShoppingCart className="w-6 h-6" /></span>
                <span><Link href='#shop' className='hover:text-primary'>Shop</Link></span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-4">
                <span><AiOutlineProduct className="w-6 h-6" /></span>
                <span><Link href='/products' className='hover:text-primary'>Product</Link></span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-4">
                <span><RiFileList2Line className="w-6 h-6" /></span>
                <span><Link href='/' className='hover:text-primary'>Pages</Link></span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-4">
                <span><FiInfo className="w-6 h-6" /></span>
                <span><Link href='/about' className='hover:text-primary'>About</Link></span>
            </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </Link>
    </div>
  );
};

export default MobNav;
