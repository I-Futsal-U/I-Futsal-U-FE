import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MainItemProps {
  icon: IconDefinition;
}

function MainItem({ icon }: MainItemProps) {
  return (
    <div className="absolute bottom-4 right-4">
      <FontAwesomeIcon
        icon={icon}
        className="text-stone-50 text-3xl sm:text-4xl md:text-6xl"
      />
    </div>
  );
}

export default MainItem;
