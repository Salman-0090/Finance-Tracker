"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const CATEGORIES = ["all", "Food", "Shopping", "Salary", "Entertainment", "Transport"];

export default function TransactionFilters({ currentCategory, startDate, endDate }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilters = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    params.set("page", "1"); 
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push(pathname); 
  };

  return (
    <div className="flex flex-col gap-4 mb-6 mt-2">

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => updateFilters("category", cat)}
            className={`px-3 py-1 rounded-full text-sm capitalize
              ${currentCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Date Range Filter */}
      <div className="flex gap-3 items-center">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">From</label>
          <input
            type="date"
            value={startDate || ""}
            onChange={(e) => updateFilters("startDate", e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">To</label>
          <input
            type="date"
            value={endDate || ""}
            onChange={(e) => updateFilters("endDate", e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
        </div>

        {/* Clear button — only shows when a filter is active */}
        {(currentCategory !== "all" || startDate || endDate) && (
          <button
            onClick={clearFilters}
            className="mt-4 text-sm text-red-500 underline"
          >
            Clear filters
          </button>
        )}
      </div>

    </div>
  );
}