import React from "react";

const Cards = () => {
    return (
        <div className=" dark:text-white">
            <div className="px-[166px] pt-[80px] pb-[112px]">
                <div className="flex justify-between gap-4">
                    <div className="font-light">
                        <h5 className="text-xs dark:text-[#F5F5F5] mb-4 tracking-widest">Imagine & Design</h5>
                        <p className="text-base w-[459px] dark:text-primary-grey">From brand development to captivating user experiences,
                            We specialize in turning concepts into compelling realities.</p>
                    </div>
                    <div>
                        <h2 className="text-[50px] mt-3 ">We Create <span className="text-primary-dark">Experiences</span></h2>
                    </div>
                </div>
                <div className="flex justify-between gap-8 mt-[80px]">
                    <div className="px-9 pt-[310px] pb-[60px] rounded-[32px] bg-[#BFBEBF] dark:bg-[#292D32] w-[360px]">
                        <h4 className="text-[32px] font-semibold mb-4">DESIGN</h4>
                        <p className="text-base font-light dark:text-primary-grey">A passion for design that leaves a
                            lasting impact with your audience.</p>
                    </div>
                    <div className="px-9 pt-[310px] pb-[60px] rounded-[32px] bg-[#BFBEBF] dark:bg-[#292D32] w-[360px]">
                        <h4 className="text-[32px] font-semibold mb-4">BRANDING</h4>
                        <p className="text-base font-light dark:text-primary-grey">The art of shaping perceptions,
                            emotions, and experiences.</p>
                    </div>
                    <div className="px-9 pt-[310px] pb-[60px] rounded-[32px] bg-[#BFBEBF] dark:bg-[#292D32] w-[360px]">
                        <h4 className="text-[32px] font-semibold mb-4">SEO</h4>
                        <p className="text-base font-light dark:text-primary-grey">Showcasing the core features and improving your idea's visibility and performance</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
