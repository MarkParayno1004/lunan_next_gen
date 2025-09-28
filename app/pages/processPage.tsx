import Image from "next/image";
export default function ProcessPage() {
  const imageSource = [
    {
      id: "licensed",
      figcaption: "Licensed",
      src: "/license_image.svg",
      alt: "licensed image",
      width: 160,
      height: 160,
    },
    {
      id: "affordable",
      figcaption: "Affordable",
      src: "/affordable_image.svg",
      alt: "affordable image",
      width: 160,
      height: 160,
    },
    {
      id: "effective",
      figcaption: "Effective",
      src: "/effective_image.svg",
      alt: "effective image",
      width: 160,
      height: 160,
    },
    {
      id: "easyToUse",
      figcaption: "Easy to Use",
      src: "/easy_to_use_image.svg",
      alt: "easy to use image",
      width: 160,
      height: 160,
    },
  ];

  return (
    <div
      className="grid grid-flow-col auto-cols-max min-h-128 justify-center
     content-end space-x-64 mb-12 mt-40"
    >
      {imageSource.map((data) => (
        <figure key={data.id} className="max-w-lg">
          <Image
            src={data.src}
            className="h-40 max-w-full"
            alt={data.alt}
            width={data.width}
            height={data.height}
          />
          <figcaption className="mt-2 text-center text-2xl font-semibold">
            {data.figcaption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
