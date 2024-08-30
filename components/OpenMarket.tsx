import Link from "next/link";
import Image from "next/image";
import varsity from "@/images/varsity.svg";

export default function OpenMarket() {
  return (
    <section className="container flex flex-col lg:flex-row justify-between py-12 gap-x-32 gap-y-10">
      <Image src={varsity} alt="varsity" className="max-w-full" />
      <div className="flex flex-col gap-6 justify-center">
        <h4 className="text-2xl text-gray-600">
          Free and open market education
        </h4>
        <div className="flex flex-col gap-2 text-gray-500">
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.{" "}
          </p>
          <Link className="text-blue-600" href="#">
            Varsity {"->"}
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.{" "}
          </p>
          <Link className="text-blue-600" href="#">
            TradingQ&A {"->"}
          </Link>
        </div>
      </div>
    </section>
  );
}
