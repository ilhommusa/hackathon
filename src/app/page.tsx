import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import Tools from "@/components/Tools";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-start gap-5 relative">
        <div className="sticky top-0">
          <Category />
        </div>
        <div>
          <Navbar />
          <Tools />
        </div>
      </div>
    </>
  );
}
