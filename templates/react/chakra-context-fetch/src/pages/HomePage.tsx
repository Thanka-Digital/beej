import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-3">
      <h1 className="text-3xl font-bold">
        Start by editing files in pages folder
      </h1>

      <Link to="/test" className="underline text-primary">
        Go to test page to view context in action
      </Link>
    </main>
  );
}
