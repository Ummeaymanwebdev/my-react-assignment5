import logo from "../logo-text.png";

 const Navbar = () => {
  return (
     <nav className="h-16 px-20 flex items-center justify-between bg-white border-b border-gray-100">
      
      {/* logo part */}
      <img
        src={logo}
        alt="Dev Stack"
        className=".w-[/105px/]"/>

      {/* center */}
      <div className="flex items-center gap-7 ml-40">
        <a href="#" className="text-pink-600 text-xs">Home</a>
        <a href="#" className="text-gray-600 text-xs">Technologies</a>
        <a href="#" className="text-gray-600 text-xs">Projects</a>
        <a href="#" className="text-gray-600 text-xs">About</a>
        <a href="#" className="text-gray-600 text-xs">Contact</a>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="text-gray-600 text-xs">Sign In</button>
        <button className="bg-pink-600 text-white text-xs px-5 py-2 rounded-full">Sign Up</button>


      </div>
    </nav>
  );
};

export default Navbar