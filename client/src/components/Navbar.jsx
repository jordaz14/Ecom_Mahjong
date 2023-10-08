function Navbar() {
  return (
    <>
      <nav className="flex justify-around items-center w-2/3 mx-auto mt-2 bg-green-800 rounded-md border-solid border-2">
        <a href="/" className="text-white">
          HOME
        </a>
        <a href="/events" className="text-white">
          EVENTS
        </a>
        <a href="/merch" className="text-white">
          MERCH
        </a>
        <a href="/login" className="text-white">
          LOG-IN
        </a>
      </nav>
    </>
  );
}

export default Navbar;
