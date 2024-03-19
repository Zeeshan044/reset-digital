import React from "react";
import Vector from "@/assets/images/Vector.svg"
import Image from "next/image";
import foundation from "@/assets/images/foundation.png";
const Foundation = () => {
    return (
        <div className=" border w-full right-0 left-0 border-black border-x-0 ">
            <div className={`pb-6 pt-8  dark:text-white`}>
                <div className="max-w-7xl mx-auto ">
                    <div className="flex justify-between gap-4 items-center mb-8">
                        <div className=" flex gap-3 px-[131px] items-center justify-center">
                            <Image src={Vector} alt="" width={64} height={64} className="p-[10px]" />
                            <p className=" text-base font-light">START</p>
                        </div>
                        <div className=" flex gap-3 px-[131px] items-center justify-center">
                            <Image src={Vector} alt="" width={64} height={64} className="p-[10px]" style={{ fill: "#596475" }} />
                            <p className=" text-base font-light">EXECUTE</p>
                        </div>
                        <div className=" flex gap-3 px-[131px] items-center justify-center">
                            <Image src={Vector} alt="" width={64} height={64} className="p-[10px]" />
                            <p className=" text-base font-light">LAUNCH</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center archia">
                        <h2 className=" text-2xl font-medium ">Foundation of Our work</h2>
                    </div>
                    <div className="flex justify-between gap-[19px] ml-20 mt-[66px] archia">
                        <div className="flex flex-col justify-between">
                            <div className=" font-medium mt-[50px] ml-10">
                                <h2 className=" text-[25px]">Functionality</h2>
                                <p className=" text-[13px] text-white/60">Designs that serve a purpose</p>
                            </div>
                            <div className=" font-medium mb-28">
                                <h2 className=" text-[25px]">Simplicity</h2>
                                <p className=" text-[13px] text-white/60">Complexity surfaced only when nessesery</p>
                            </div>
                        </div>
                        <Image src={foundation} alt="" width={736} height={523} />
                        <div className=" font-medium mt-[45px]">
                            <h2 className=" text-[25px]">Emotion</h2>
                            <p className=" text-[13px] text-white/60">Products with a character & solutions optimized for emotion</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Foundation;
