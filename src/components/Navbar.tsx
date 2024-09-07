import { Input } from './Input'; // Ensure this path is correct

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6 border border-black">
      <a href="#">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Traffic Optimizer</span>
        </div>
      </a>
      <div className="flex items-center gap-4">
        <div className="relative">
          <label className="text-bold font-semibold p-4">Start</label>
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
          />
        </div>
        <label className="text-bold font-semibold p-4">Finish</label>
        <div className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
          />
        </div>
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
