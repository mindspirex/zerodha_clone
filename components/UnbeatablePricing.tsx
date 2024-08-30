import Link from "next/link";
import Image from "next/image";
import charges from "../images/charges.png";

export default function UnbeatablePricing() {
  return (
    <section className="container flex py-12">
      <div className="flex flex-col gap-5">
        <h3 className="text-4xl text-gray-600">Unbeatable Pricing</h3>
        <div className="flex gap-5 lg:flex-row flex-col">
          <p className="text-gray-600">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. </p>
          <Image src={charges} alt="charges"/>
        </div>
        <Link href="#" className="text-blue-600">See Pricing -></Link>
      </div>
    </section>
  );
}