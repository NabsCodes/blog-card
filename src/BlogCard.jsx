import { FaArrowRight } from "react-icons/fa";
import image from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";

const BlogCard = () => {
  return (
    <main className="flex flex-col rounded-lg border border-solid border-neutral-200 bg-white">
      <img
        src={image}
        alt="Interior"
        className="h-72 w-[340px] rounded-t-lg object-cover"
      />
      <div className="flex w-[340px] flex-col justify-center gap-3 px-4 py-6">
        <div className="flex flex-col gap-2 self-stretch">
          <span className="inline-block w-fit rounded-full border border-solid border-green-200 bg-green-50 px-2 py-1 text-sm text-green-700">
            Interior
          </span>
          <p className="text-lg font-semibold text-neutral-900">
            Top 5 Living Room Inspirations
          </p>
        </div>
        <div className="flex flex-col gap-2 self-stretch">
          <p className="mb-3 text-base font-medium text-neutral-600">
            Curated vibrant colors for your living, make it pop & calm at the
            same time.
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
      </div>
    </main>
  );
};

export default BlogCard;
