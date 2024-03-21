import React from "react";

const ChooseServices = () => {
    return (
        <div className=" dark:text-secondary-light text-secondary-cold">
            <div className=" border border-primary-dark">
                <div className=" flex flex-col items-center py-12">
                    <h2 className=" text-5xl font-bold mb-2">TAKE THE <span className=" font-thin text-primary-dark"> FIRST STEP</span></h2>
                    <p className=" dark:text-primary-grey text-2xl font-medium">Choose the plan best suited for your needs.</p>
                    <button className=" bg-primary-dark rounded-full py-3 px-6 text-secondary-dark mt-8">View Packages</button>
                </div>
            </div>
        </div>
    );
};

export default ChooseServices;
