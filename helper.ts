export interface Category {
  name: string;
  description: string;
  image: string;
}

export interface Terms {
  id: string;
  name: string;
  definition: string;
  image: string;
  usage: string;
  category: string;
  relatedTerms: string[];
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(
    "https://building-dictionary-api.onrender.com/api/categories",
    {
      next: { revalidate: 3600 }, // revalidate every hour
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return data;
}

export const getAllTerms = async (): Promise<Terms[]> => {
  const res = await fetch(
    "https://building-dictionary-api.onrender.com/api/terms",
    { cache: "no-store" }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch terms");
  }

  return data;
};

export async function getTermByName(name: string): Promise<Terms[]> {
  const res = await fetch(
    `https://building-dictionary-api.onrender.com/api/terms/search?query=${name}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch term by name");
  }
  return data;
}

export const getCategoryData = async (category: string): Promise<Terms[]> => {
  const res = await fetch(
    `https://building-dictionary-api.onrender.com/api/categories/${category}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch terms for category: ${category}`);
  }
  return res.json();
};
