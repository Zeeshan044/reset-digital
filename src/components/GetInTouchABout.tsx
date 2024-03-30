import Touch1 from "@/assets/images/touch1.png";
import Touch2 from "@/assets/images/touch2.png";
import Touch3 from "@/assets/images/touch3.png";
import Image from "next/image";
import Link from "next/link";

const GetInTouchABout = () => {
  return (
    <div
      className=" max-w-5xl mx-auto  pt-[112px] pb-[80px] text-white "
      id="about"
    >
      <div className=" flex bg-[#292D32] rounded-[30px] h-[430px]">
        <div className="  px-[68px] pt-[70px]  flex flex-col items-center relative overflow-hidden w-[452px]">
          <h5 className=" text-secondary-light text-xs font-light tracking-widest">
            Get In Touch
          </h5>
          <h2 className=" text-6xl font-medium text-center mb-[18px]">
            Let&apos;s Start
            <i className=" font-thin text-primary-dark -mt-5"> Your Project</i>
          </h2>
          <p className=" text-base font-light text-center text-body-dark dark:text-body ">
            The customer is very important, the customer will be followed by the
            customer. Vestibule valley
          </p>
          <Link
            href="/contact"
            className=" bg-primary-dark py-3 px-6 rounded-full mt-8 text-black"
          >
            Get In Touch
          </Link>
        </div>
        <div className="h-[500px] relative overflow-hidden">
          <Image src={Touch3} alt="" className=" h-[50%]" />
          <Image
            src={Touch2}
            alt=""
            className="absolute inset-0 h-[50%] left-14 top-20"
          />
          <Image
            src={Touch1}
            alt=""
            className="absolute inset-0 h-[50%] w-full top-40 left-32 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchABout;
