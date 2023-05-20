import type { IconType } from "react-icons/lib";

interface MainItemProps {
  icon: IconType;
}

function MainItem({ icon }: MainItemProps) {
  return (
    <div className="absolute bottom-4 right-4 text-stone-50 text-3xl sm:text-4xl md:text-6xl">
      {icon({})}
    </div>
  );
}

export default MainItem;
