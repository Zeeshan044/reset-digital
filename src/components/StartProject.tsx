import React from "react";
import Project1 from "@/assets/images/project.png"
import Project2 from "@/assets/images/project2.png"
import Image from "next/image";
const StartProject = () => {
    return (
        <div className="container-small pt-[112px] pb-[80px] text-secondary-light">
            <div className="bg-secondary-dark  pl-[158px] pr-[532px] py-[90px] rounded-[30px] flex flex-col items-center relative overflow-hidden">
                <h5 className=" text-xs font-light tracking-widest">GET IN TOUCH</h5>
                <h2 className=" text-6xl font-medium text-center my-[18px]">Let's Start
                    <i className=" font-thin text-primary-dark -mt-5"> Your Project</i></h2>
                <p className=" text-base font-light text-center text-white px-[50px] ">Contact us to create
                    your dream online presence</p>
                <a href="" className=" bg-primary-dark py-3 px-6 rounded-full mt-8 text-secondary-dark">Get In Touch</a>
                <Image src={Project2} alt="" className="absolute right-0 top-0" />
                <Image src={Project1} alt="" className="absolute right-0" />
            </div>
        </div>
    );
};

export default StartProject;
