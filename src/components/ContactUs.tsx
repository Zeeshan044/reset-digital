import React from "react";
import Button from "./ui/button";

const ContactUs = () => {
  return (
    <div className="container-custom py-24">
      <div className="md:bg-card md:py-16 md:px-10 ">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-center gap-y-4 mb-12">
              <h5 className="text-xs font-light tracking-long uppercase">
                get in touch
              </h5>
              <h2 className="text-4xl md:text-5xl font-medium capitalize">
                Request a free{" "}
                <i className="bg-primary text-primary-foreground">
                  consultation
                </i>{" "}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam, distinctio? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Earum, sequi.
              </p>
            </div>
            <form className="">
              <div className="grid md:grid-cols-2 gap-8">
                <Input label="Name" placeholder="Your Name" name="name" />
                <Input label="Email" placeholder="Your Email" name="email" />
                <Input
                  label="Phone Number"
                  placeholder="+ 1009 12345"
                  name="phone"
                />
                <Input
                  label="Service"
                  placeholder="Consultation"
                  name="service"
                />
              </div>
              <Input
                label="Message"
                placeholder="Your Message"
                name="message"
                as="textarea"
                className="mt-8"
              />
              <Button className="mt-8">Send Request</Button>
            </form>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

type InputProps = {
  label: string;
  placeholder: string;
  name: string;
  as?: "input" | "textarea";
  className?: string;
};
function Input({
  label,
  placeholder,
  name,
  as = "input",
  className,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className={`text-base font-thin text-secondary-light ${className}`}
      >
        {label}
      </label>
      {as === "input" ? (
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          className="px-4 py-5 rounded-md bg-[#F1F3F5] text-gray-900 focus:outline-none"
        />
      ) : (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          rows={4}
          className="px-4 py-5 rounded-md bg-[#F1F3F5] text-gray-900 focus:outline-none resize-none"
        ></textarea>
      )}
    </div>
  );
}
