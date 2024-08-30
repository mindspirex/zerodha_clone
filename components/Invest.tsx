import Image from "next/image";
import Link from "next/link";
import landing from "../images/landing.png";

export default function Invest() {
  return (
    <section className="container flex flex-col gap-10 py-12">
      <Image src={landing} alt="landing" />
      <div className="flex flex-col gap-3">
        <h1 className="text-center text-5xl text-gray-600">
          Invest in everything
        </h1>
        <h3 className="text-center text-xl text-gray-600">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </h3>
      </div>
      <div className="flex justify-center">
        <Link
          href="#"
          className="rounded bg-blue-500 px-8 py-2 text-lg text-white"
        >
          Sign up now
        </Link>
      </div>
    </section>
  );
}
