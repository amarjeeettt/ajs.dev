import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1
          className="text-8xl mb-4 flex justify-center items-center"
          aria-label="404 Error"
        >
          <span>4</span>
          <span className="mx-2 w-20 h-20 bg-red-600 text-white rounded-full flex justify-center items-center">
            !
          </span>
          <span>4</span>
        </h1>
        <h2 className="text-4xl font-bold mb-2">Oops! You're lost.</h2>
        <p className="text-xl font-light text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <div className="transition-transform duration-200 ease-in-out hover:scale-105">
          <Link to="/">
            <Button className="bg-red-600 hover:bg-red-600/90 text-white font-semibold py-2 px-6 gap-2">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
