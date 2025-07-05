import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

interface HomeButtonProps {
  className?: string;
  link?: string;
}

export const HomeButton = ({ className, link }: HomeButtonProps) => {
  return (
    <Button
      className={`bg-[#34343D] text-white font-gothic px-[150px] rounded-2xl py-4 hover:bg-gray-800 transition-colors duration-300 ${className ?? ""}`}
    >
      <Link to={link ?? "#"}>Explore</Link>
    </Button>
  );
};
