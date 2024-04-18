import ContactImg from "@/assets/images/contact-page.png";
import Button from "@/components/ui/button";
import DummyLoading from "@/components/ui/dummy-loading";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="container-custom-xxl py-24">
      <DummyLoading />
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
                Take the first step towards transforming your online presence
                with Reset Digital. Whether you&apos;re looking to refresh your
                website, enhance your brand identity, or boost your SEO, our
                team is ready to guide you through the possibilities and tailor
                a strategy just for you. Reach out now for a no-obligation
                consultation to discuss your project&apos;s unique needs and how
                we can bring your digital vision to life
              </p>
            </div>
            <form className="">
              <div className="grid md:grid-cols-2 gap-8">
                <Input label="Name" placeholder="Your Name" name="name" />
                <Input
                  label="Company"
                  placeholder="Company Name"
                  name="company"
                />
                <Input label="Email" placeholder="Your Email" name="email" />
                <Input
                  label="Phone Number"
                  placeholder="+ 1009 12345"
                  name="phone"
                />
                <Input label="URL" placeholder="Your Website URL" name="url" />
              </div>
              <Input
                label="Message"
                placeholder="Please describe your needs"
                name="message"
                as="textarea"
                className="mt-8"
              />
              <Button className="mt-8">Send Request</Button>
            </form>
          </div>
          <div className="hidden md:block">
            <Image
              src={ContactImg}
              alt="contact image"
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
          className="px-4 py-5 bg-[#F1F3F5] text-gray-900 focus:outline-none"
        />
      ) : (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          rows={4}
          className="px-4 py-5 bg-[#F1F3F5] text-gray-900 focus:outline-none resize-none"
        ></textarea>
      )}
    </div>
  );
}
