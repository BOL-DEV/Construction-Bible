import CategoriesCard from "./CategoriesCard";
import { SyncLoader } from "react-spinners";
import { getCategories } from "@/helper";

interface Category {
  name: string;
  description: string;
  image: string;
}

const Categories = async () => {
  const categories = await getCategories();
  const isLoading = !categories;

  console.log(categories);

  return (
    <section>
      <div className="flex flex-col items-center bg-amber-50 dark:bg-neutral-900 dark:text-gray-200 lg:p-15 p-3 gap-4 ">
        <h1 className="text-3xl font-bold">Browse by Category</h1>
        <p className="text-gray-400 text-center lg:text-lg md:text-md text-sm max-w-2xl">
          Explore construction knowledge organized by topic
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 pb-20 lg:px-40 bg-amber-50 dark:bg-neutral-900 dark:text-gray-200">
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center py-20">
            <SyncLoader
              color="#b45309"
              loading={isLoading}
              size={15}
              margin={8}
              speedMultiplier={1}
            />
          </div>
        ) : (
          categories.map((category: Category) => (
            <CategoriesCard
              key={category.name}
              title={
                category.name.charAt(0).toUpperCase() + category.name.slice(1)
              }
              terms={category.description}
              image={category.image}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Categories;
