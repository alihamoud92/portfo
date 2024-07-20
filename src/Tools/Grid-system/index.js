import "./style.css";
export const Col = ({
  md,
  lg,
  sm,
  xl,
  xs,
  col,
  children,
  className,
  onClick,
}) => {
  return (
    <div
      className={`col-${col} col-lg-${lg} col-md-${md} col-xs-${xs} mb-2 col-sm-${sm} col-xl-${xl} ${className}`}
    >
      {children}
      {onClick}
    </div>
  );
};
export const Row = ({ children, className, gap, justify, style }) => {
  return (
    <div className={`row ${"gap-" + gap} ${className} justify-${justify}`}>
      {children}
    </div>
  );
};
export const Container = ({ children, className }) => {
  return (
    <section className={`py-5 ${className}`}>
      <div className="mx-auto container max-sm:w-[90vw]">{children}</div>
    </section>
  );
};
