import Image from "next/image";
import Link from "next/link";
import press_logos from "../images/press_logos.png";

export default function Press() {
  return (
    <section className="container flex justify-center py-6">
      <Link href="#">
        <Image src={press_logos} alt="press logos" />
      </Link>
    </section>
  );
}
