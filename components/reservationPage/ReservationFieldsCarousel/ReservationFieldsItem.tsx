import Image from "next/image";
interface ReservationFieldsItemProps {
  image: string;
}

export default function ReservationFieldsItem({
  image,
}: ReservationFieldsItemProps) {
  return (
    <>
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt="fieldsImage"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
