import Image from "next/image";

interface LocalFieldsItemProps {
  fieldName: string;
  img: string;
  stars: number;
}

function LocalFieldsItem({ fieldName, img, stars }: LocalFieldsItemProps) {
  return (
    <div className="flex-auto flex-col justify-center w-full h-full">
      <div className="relative w-full h-4/6 border-2 border-solid border-blue-500 rounded-2xl overflow-hidden">
        <Image src={img} alt={fieldName} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="pl-1">
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold mt-2">
          {fieldName}
        </h2>
        <p className="font-bold text-gray-400">{stars} / 5점</p>
      </div>
    </div>
  );
}

export default LocalFieldsItem;
