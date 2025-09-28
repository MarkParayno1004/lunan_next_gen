import Image from "next/image";

export default function MobilePage() {
  return (
    <div className="grid grid-flow-col gap-x-36 min-h-128 content-center justify-center">
      <div className="flex h-128">
        {/* <img className="object-contain h-128 w-100" src={LoginScreenApp} /> */}
        <Image
          className="object-contain"
          src="/mobile_login_screen.svg"
          alt="Mobile Login Screen"
          height={300}
          width={300}
        />
        {/* <img className="object-contain h-128 w-100" src={HomeScreenApp} /> */}
      </div>
      <div>
        <article className="text-pretty">
          <p className="text-4xl text-balance font-medium">
            Embark on a journey towards a happier,
            <br /> healthier you, one session at a time.
          </p>
          <div className="mt-10 grid justify-items-start">
            <a href="https://drive.google.com/file/d/1Yo99eKL2IdXl4wSlxvDUljikHcAGBof9/view?usp=sharing">
              <Image
                className="object-contain"
                src="/google_play.svg"
                alt="Google Play"
                height={80}
                width={100}
              />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
