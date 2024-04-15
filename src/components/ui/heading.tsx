type HeadingProps = {
  subtitle?: string;
  title: string;
  span: string;
};

function Heading({ subtitle, title, span }: HeadingProps) {
  return (
    <div>
      <h5 className="text-xs mb-4 tracking-long uppercase ">{subtitle}</h5>
      <h2 className="text-5xl md:text-6xl mt-3">
        {title}{" "}
        <i className="bg-primary text-primary-foreground whitespace-nowrap">
          {span}
        </i>
      </h2>
    </div>
  );
}

export default Heading;
