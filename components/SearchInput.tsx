"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function SearchInput({
  defaultValue = "",
}: {
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentQ = searchParams.get("q") || "";
      if (value === currentQ) return;

      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }
      const nextUrl = params.toString()
        ? `${pathname}?${params.toString()}`
        : pathname;
      startTransition(() => {
        router.replace(nextUrl);
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [value, searchParams, router, pathname]);

  return (
    <input
      className="bg-amber-50 p-4 rounded-lg shadow-md w-full lg:w-[50%] border border-neutral-200 dark:border-neutral-600 focus:outline-amber-600 dark:bg-neutral-800 dark:text-gray-200"
      type="search"
      placeholder="Filter construction terms..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      aria-busy={isPending}
    />
  );
}
