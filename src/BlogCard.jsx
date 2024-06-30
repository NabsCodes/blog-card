import { FaArrowRight } from "react-icons/fa";
import image from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";

const BlogCard = () => {
  return (
    <main className="mx-auto flex max-w-[340px] flex-col rounded-lg border border-solid border-neutral-200 bg-white">
      <img
        src={image}
        alt="Interior"
        className="h-72 w-[340px] rounded-t-lg object-cover"
      />
      <div className="p-4">
        <span className="rounded-full bg-green-50 px-2 py-1 text-sm text-green-700">
          Interior
        </span>
        <p className="mt-3 text-lg font-semibold text-neutral-900">
          Top 5 Living Room Inspirations
        </p>
        <p className="mb-4 mt-3 text-neutral-600">
          Curated vibrant colors for your living, make it pop & calm at the same
          time.
        </p>
        <a
          href="https://www.greatfrontend.com/projects/u/nabeelhassan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium text-indigo-700 hover:text-indigo-800"
        >
          Read more
          <FaArrowRight className="ml-2 inline-block" />
        </a>
      </div>
    </main>
  );
};

export default BlogCard;
