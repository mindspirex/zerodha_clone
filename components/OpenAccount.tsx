import Link from "next/link";

export default function OpenAccount() {
  return (
    <section className="contianer flex flex-col items-center gap-6 py-20">
      <h2 className="text-3xl text-gray-600">Open a Zerodha account</h2>
      <p className="text-center text-xl text-gray-600">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
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
