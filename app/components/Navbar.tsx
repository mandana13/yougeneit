export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200/50 bg-[#fffdf7]/80 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            yougeneit
          </h1>
        </div>



        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm text-gray-700 md:flex">

          <a
            href="#research"
            className="transition hover:text-blue-600"
          >
            Research
          </a>


          <a
            href="#publications"
            className="transition hover:text-blue-600"
          >
            Publications
          </a>


          <a
            href="#about"
            className="transition hover:text-blue-600"
          >
            About
          </a>


          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Contact
          </a>

        </div>


      </div>

    </nav>
  );
}