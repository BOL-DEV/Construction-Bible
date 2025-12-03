// export const revalidate = 3600; // ISR cache for 1 hour

export async function getCategories() {
  const res = await fetch(
    "https://building-dictionary-api.onrender.com/api/categories"
    // {
    //   next: { revalidate: 3600 }, // revalidate every hour
    // }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export const getAllTerms = async () => {
  const res = await fetch(
    "https://building-dictionary-api.onrender.com/api/terms",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch terms");
  }

  return res.json();
};
