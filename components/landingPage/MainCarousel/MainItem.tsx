import type { IconType } from "@react-icons/all-files/lib";

interface MainItemProps {
  icon: IconType;
  text: string;
}

function MainItem({ icon, text }: MainItemProps) {
  return (
    <>
      <h2 className="absolute top-1/2 w-full text-center -translate-y-1/2 text-stone-50">
        {text}
      </h2>
      <div className="absolute bottom-4 right-4 text-stone-50 text-3xl sm:text-4xl md:text-6xl">
        {icon({})}
      </div>
    </>
  );
}

export default MainItem;
