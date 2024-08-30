import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="border-t bg-[#fbfbfb] py-10">
      <section className="container flex flex-col justify-between gap-y-8 lg:flex-row">
        <div className="flex flex-col gap-4">
          <Image src={logo} alt="logo" className="w-40 object-scale-down" />
          <div className="flex flex-col gap-1">
            <p>© 2010 - 2024, Zerodha Broking Ltd.</p>
            <p>All rights reserved</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg text-black">Company</h4>
          <div className="flex flex-col gap-1 text-gray-600">
            <Link href="#" className="">
              About
            </Link>
            <Link href="#" className="">
              Products
            </Link>
            <Link href="#" className="">
              Pricing
            </Link>
            <Link href="#" className="">
              Referral programme
            </Link>
            <Link href="#" className="">
              Careers
            </Link>
            <Link href="#" className="">
              Zerodha.tech
            </Link>
            <Link href="#" className="">
              Press & Media
            </Link>
            <Link href="#" className="">
              Zerodha Cares (CSR)
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg text-black">Support</h4>
          <div className="flex flex-col gap-1 text-gray-600">
            <Link href="#">Contact us</Link>
            <Link href="#">Support portal</Link>
            <Link href="#">Z-Connect blog</Link>
            <Link href="#">List of charges</Link>
            <Link href="#">Downloads and resources</Link>
            <Link href="#">Videos</Link>
            <Link href="#">Market overview</Link>
            <Link href="#">How to file a complaint?</Link>
            <Link href="#">Status of your complaints</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg text-black">Account</h4>
          <div className="flex flex-col gap-1 text-gray-600">
            <Link href="#">Open an account</Link>
            <Link href="#">Fund transfer</Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
