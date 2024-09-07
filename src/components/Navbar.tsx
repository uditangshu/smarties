
import { Input } from './Input';
import { Link } from 'react-router-dom'; // For a React app, you can use react-router-dom for navigation

export default function Component() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6 border border-color-black">
      <Link to="#" className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Traffic Optimizer</span>
      </Link>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <label className='text-bold font-semi-bold p-4'>Start</label>
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
          />
        </div>
        <label className='text-bold font-semi-bold p-4'>Finish</label>
        <div className="relative">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
          />
        </div>
      </div>
      <nav className="hidden gap-4 md:flex">
        <Link to="#" className="text-sm font-medium text-muted-foreground hover:underline">
          Home
        </Link>
        <Link to="#" className="text-sm font-medium text-muted-foreground hover:underline">
          About
        </Link>
        <Link to="#" className="text-sm font-medium text-muted-foreground hover:underline">
          Products
        </Link>
        <Link to="#" className="text-sm font-medium text-muted-foreground hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}

  function MountainIcon(props: any) {
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
