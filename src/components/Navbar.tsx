// import { Input } from './Input'; 
// import { useState } from 'react';

export default function Navbar() {
  // const [origins, setOrigins] = useState('');
  // const [destinations, setDestinations] = useState('');

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Construct the query parameters
  //   const queryParams = new URLSearchParams({
  //     origins: origins,
  //     destinations: destinations,
  //   });

    // Update the URL without reloading the page
  //   window.history.pushState(
  //     {},
  //     '',
  //     `${window.location.pathname}?${queryParams}`
  //   );
  // };

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6 mb-20 shadow-lg animate-slide-iny">
      <a href="#">
        <div className="flex items-center gap-2 ">
          {/* <MountainIcon className="h-6 w-6" />
          <span className=" flex  items-center text-lg font-semibold">Traffic Optimizer</span> */}
        </div>
      </a>
      <div className="flex items-center gap-4 ml-44">
        {/* <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <div className="relative">
            <label className="text-bold font-semibold p-4">Start</label>
            <Input
              type="search"
              placeholder="Enter origin..."
              value={origins}
              onChange={(e) => setOrigins(e.target.value)}
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
            />
          </div>
          <div className="relative">
            <label className="text-bold font-semibold p-4">Finish</label>
            <Input
              type="search"
              placeholder="Enter destination..."
              value={destinations}
              onChange={(e) => setDestinations(e.target.value)}
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-bold font-semibold text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button> */}
        {/* </form> */}
        <MountainIcon className="h-6 w-6" />
        <span className=" flex  items-center text-xl font-semibold ">Traffic Optimizer</span>
      </div>
      <nav className="hidden gap-4 md:flex">
        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline">
          Home
        </a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline">
          About
        </a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline">
          Products
        </a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
