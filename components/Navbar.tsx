"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import nav_button from "@/images/nav_button.png";
import kite from "@/images/popup/kite_logo.svg";
import console from "@/images/popup/console.svg";
import kite_connect from "@/images/popup/kite_connect.svg";
import coin from "@/images/popup/coin.svg";
import varsity from "@/images/popup/varsity.png";
import trading from "@/images/popup/trading.png";

interface PopupProps {
  popupOpen: boolean;
}

function Popup({ popupOpen }: PopupProps) {
  return popupOpen ? (
    <div className="absolute right-8 top-[55px] flex h-[250px] w-[600px] flex-col justify-between border bg-white">
      <div className="flex justify-around py-5">
        <div className="flex flex-col items-center">
          <Image src={kite} alt="kite" />
          <h4>Kite</h4>
          <p className="text-xs">Trading platform</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={console} alt="console" />
          <h4>Console</h4>
          <p className="text-xs">Backoffice</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={kite_connect} alt="kite connect" />
          <h4>Kite Connect</h4>
          <p className="text-xs">Trading APIs</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={coin} alt="coin" />
          <h4>Coin</h4>
          <p className="text-xs">Mutual funds</p>
        </div>
      </div>
      <div className="flex justify-around bg-[#fbfbfb] py-5">
        <div className="flex flex-col">
          <h3 className="font-semibold">Utilities</h3>
          <Link href="#">Brokerage calculator</Link>
          <Link href="#">Margin calculator</Link>
          <Link href="#">Holiday calendar</Link>
          <Link href="#">Markets</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold">Updates</h3>
          <Link href="#">Z-Connect blog</Link>
          <Link href="#">Pulse News</Link>
          <Link href="#">Circulars / Bulletin</Link>
          <Link href="#">IPOs</Link>
        </div>
        <div className="flex flex-col items-center justify-between">
          <h3 className="font-semibold">Education</h3>
          <div className="flex gap-4">
            <Link href="#">
              <Image src={varsity} alt="varsity" />
              <p>Varsity</p>
            </Link>
            <Link href="#">
              <Image src={trading} alt="trading" />
              <p>Trading Q&A</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [popupOpen, setPopupOpen] = React.useState(false);

  const togglePopup = () => {
    setPopupOpen((prev) => !prev);
  };

  return (
    <div className="border-b">
      <section className="container flex h-16 items-center justify-between">
        <Image src={logo} alt="logo" className="h-4 w-32" />
        <div className="flex items-center justify-evenly text-sm text-gray-500">
          <Link href="#" className="hidden p-6 hover:text-blue-400 md:inline">
            Signup
          </Link>
          <Link href="#" className="hidden p-6 hover:text-blue-400 md:inline">
            About
          </Link>
          <Link href="#" className="hidden p-6 hover:text-blue-400 md:inline">
            Products
          </Link>
          <Link href="#" className="hidden p-6 hover:text-blue-400 md:inline">
            Pricing
          </Link>
          <Link href="#" className="hidden p-6 hover:text-blue-400 md:inline">
            Support
          </Link>
          <div className="relative">
            <button onClick={togglePopup} className="relative">
              <Image
                src={nav_button}
                alt="nav button"
                className="mx-6 h-8 w-8"
              />
            </button>
            <Popup popupOpen={popupOpen} />
          </div>
        </div>
      </section>
    </div>
  );
}
