import Image from "next/image";
import Link from "next/link";
import ecosystem from "../images/ecosystem.png";

export default function TrustWithConfidence() {
  return (
    <section className="container py-12 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col gap-8">
        <h3 className="text-4xl text-gray-600">Trust with confidence</h3>
        <div className="flex flex-col gap-3">
          <h4 className="text-xl text-gray-700">Customer-first always</h4>
          <p className="text-gray-500">
            That{"'"}s why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
            crores of equity investments and contribute to 15% of daily retail
            exchange volumes in India.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-xl text-gray-700">No spam or gimmicks</h4>
          <p className="text-gray-500">
            No gimmicks, spam, {'"'}gamification{'"'}, or annoying push
            notifications. High quality apps that you use at your pace, the way
            you like.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-xl text-gray-700">The Zerodha universe</h4>
          <p className="text-gray-500">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-xl text-gray-700">Do better with money</h4>
          <p className="text-gray-500">
            With initiatives like Nudge and Kill Switch, we don{"'"}t just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
      </div>
      <div>
        <Image src={ecosystem} alt="ecosystem" width={2000} height={2000} />
        <div className="flex justify-evenly text-blue-600">
          <Link href="#">Explore our products {"->"}</Link>
          <Link href="#">Try Kite demo {"->"}</Link>
        </div>
      </div>
    </section>
  );
}
