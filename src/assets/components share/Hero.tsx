import heroImage from "../banner-stack.png";

 
 const Hero = () => {
   return (
      <section className="min-h-[390px] px-20 py-14 flex items-center justify-between bg-white">

      {/* paragraph */}

      <div className="w-1/2">
      <h1 className="text-[46px] leading-none font-bold text-slate-900"> Build Your Ideal

     <span className="block mt-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"> Development Stack
</span>
        
        </h1>
        <p className="w-[/500px/] mt-6 text-sm leading-6 text-slate-500">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        {/* Button */}
        <div className="flex gap-3 mt-9">
        <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-3 rounded-md">Explore Technologies
        </button>

          <button className="border border-gray-200 px-9 py-3 rounded-md">Learn More
          </button>

        </div>

      </div>

      {/* banner */}
      <div className="w-1/2 flex justify-end">
        <img
          src={heroImage}
          alt="Development Stack"
          className="w-[430px]"/>
      </div>

    </section>
  );
};
 
 export default Hero