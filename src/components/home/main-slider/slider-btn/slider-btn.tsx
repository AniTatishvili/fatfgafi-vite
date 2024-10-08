import { IconType } from "react-icons";

interface HomeDestinationSliderButtonProps {
  icon: IconType;
  size: number;
  direct: string;
}

export const SliderBtn = (props: HomeDestinationSliderButtonProps) => {
  const { icon: IconComponent, size } = props;

  return (
    <IconComponent
      className="text-gray-600 cursor-pointer "
      style={{ fontSize: size }}
    />
  );
};
