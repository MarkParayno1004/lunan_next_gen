import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div
      className="grid grid-cols-2 auto-cols-max min-h-128 content-center
     place-items-center bg-secondary pt-20 pb-20 mt-32"
    >
      <div>
        <article className="text-pretty ms-60">
          <h1 className="text-6xl text-white font-semibold">About Us</h1>
          <h1 className="text-4xl font-semibold text-white mt-6">Mission</h1>
          <p className="text-4xl text-white mt-2">
            BWI is committed to provide holistic mental
            <br /> health programs and strategies through its
            <br /> evidence-based psycho-social support
            <br />
            services for individuals, families and
            <br /> communities.
          </p>
        </article>
        <article className="text-pretty mt-6 ms-60">
          <h1 className="text-4xl font-semibold text-white">Vision</h1>
          <p className="text-4xl text-white mt-2">
            BWI aspires to become a trusted partner institution of individuals,
            families and communities in creating psycho-social safe spaces.
          </p>
        </article>
      </div>
      <Image
        className="object-cover"
        src="/about_us_image.svg"
        alt="About Us Image"
        height={544}
        width={800}
      />
    </div>
  );
}
