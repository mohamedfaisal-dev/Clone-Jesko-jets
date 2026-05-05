export default function Header() {
  return (
    <header className="w-screen xl:h-16 hidden xl:flex justify-between items-center fixed top-0 z-[999] px-16 py-12 ">
      <nav>
        <ul className="flex justify-center items-center gap-8 font-medium">
          <li className="cursor-pointer hover:text-gray-400 transition-colors">About</li>
          <li className="cursor-pointer hover:text-gray-400 transition-colors">Our Fleet</li>
          <li className="cursor-pointer hover:text-gray-400 transition-colors">Advantages</li>
          <li className="cursor-pointer hover:text-gray-400 transition-colors">Global</li>
        </ul>
      </nav>

      <ul className="flex justify-center items-center gap-8 font-medium">
        <li className="cursor-pointer hover:text-gray-400 transition-colors">+1 (888) SHADE-VIP</li>
        <li className="cursor-pointer hover:text-gray-400 transition-colors">concierge@allshadejets.com</li>
      </ul>
    </header>
  );
}
