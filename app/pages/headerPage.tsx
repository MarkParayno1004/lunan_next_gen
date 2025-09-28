import Image from "next/image";
export default function HeaderPage() {
  return (
    <div
      className="grid grid-flow-col auto-cols-max min-h-128
      justify-center content-center bg-primary pb-10"
    >
      <div>
        <article className="text-pretty mt-6">
          <h1
            className="text-5xl font-bold text-white flex flex-col
            leading-snug"
          >
            <span>Convenient and</span>
            <span>Affordable Therapy</span>
            <span>Anytime, Anywhere.</span>
          </h1>

          <h1 className="text-1xl text-white mt-2 flex flex-col leading-snug">
            <span>A safe and supportive space where licensed</span>
            <span>therapists provide compassionate and effective</span>
            <span>therapy services.</span>
          </h1>
        </article>
        <button
          className="mt-4 bg-secondary rounded-lg px-3 py-2
           font-semibold text-white text-xl"
        >
          Get Started
        </button>
      </div>
      <Image
        className="object-cover max-h-max"
        src="/header_image.svg"
        alt="counseling image"
        width={600}
        height={300}
      />
    </div>
  );
}
