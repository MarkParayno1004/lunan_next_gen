import Link from "next/link";
export default function NavbarComponent() {
  return (
    <header className="sticky top-0">
      <nav className="bg-primary r px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            href="/"
            className="flex items-center"
            style={{ textDecoration: "none" }}
          >
            <span className="text-pretty text-2xl ms-2 font-semibold whitespace-nowrap text-white">
              Lunan Online Counseling
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              href="/"
              className="text-white font-medium text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              href="/FAQ"
              className="text-white font-medium text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              style={{ textDecoration: "none" }}
            >
              FAQ
            </Link>
            <Link
              href="/login"
              className="text-white font-medium text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
            <Link
              href="/Sign Up"
              className="text-white font-medium text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              style={{ textDecoration: "none" }}
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
