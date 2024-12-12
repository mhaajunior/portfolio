import { Cake } from "lucide-react";
import React from "react";
import Image from "next/image";

const SecretPage = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen relative">
      <div className="relative">
        <Cake size={120} className="absolute left-[10rem] top-[6rem]" />
        <Image
          src="/temp/hbd.jpg"
          alt="HBD"
          width={600}
          height={400}
          priority
        />
      </div>
      <h1 className="text-6xl absolute bottom-0">สุขสันต์วันเกิดนะต้าบอ้วนๆ</h1>
    </div>
  );
};

export default SecretPage;
