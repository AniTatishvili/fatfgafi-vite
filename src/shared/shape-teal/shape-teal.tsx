interface ShapeTealProps {
  text: string;
}

export const ShapeTeal = (props: ShapeTealProps) => {
  const { text } = props;

  return (
    <div className="bg-[#4f9eb2] flex justify-end text-[#fff] font-[Graphik,Calibri,sans-serif] font-[700] shape-teal-btn">
      {text}
    </div>
  );
};
