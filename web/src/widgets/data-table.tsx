import "@/index.css";

import { useState, useMemo, useRef, useEffect } from "react";
import { mountWidget, useLayout } from "skybridge/web";
import { useToolInfo } from "../helpers";

function DataTableWidget() {
  const { theme } = useLayout();
  const { output, isPending } = useToolInfo<"data-table">();
  
  // Initialize from server values
  const [searchQuery, setSearchQuery] = useState(output?.search || "");
  const [selectedCategory, setSelectedCategory] = useState(output?.category || "All");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setShowCategorySuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get unique product names for search autocomplete
  const searchSuggestions = useMemo(() => {
    if (!output?.tableData?.rows || !searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return output.tableData.rows
      .filter((row) => row.name.toLowerCase().includes(query))
      .map((row) => row.name)
      .slice(0, 5);
  }, [output?.tableData?.rows, searchQuery]);

  const filteredRows = useMemo(() => {
    if (!output?.tableData?.rows) return [];
    
    return output.tableData.rows.filter((row) => {
      const matchesSearch = row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.color.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || row.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [output?.tableData?.rows, searchQuery, selectedCategory]);

  // Filter categories for autocomplete
  const categorySuggestions = useMemo(() => {
    if (!output?.tableData?.categories) return [];
    return ["All", ...output.tableData.categories];
  }, [output?.tableData?.categories]);

  if (isPending) {
    return (
      <div className={`${theme} bg-neutral-primary p-6`}>
        <div role="status" className="flex items-center justify-center">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin fill-brand"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!output) {
    return (
      <div className={`${theme} bg-neutral-primary p-6`}>
        <p className="text-body">No table data available.</p>
      </div>
    );
  }

  return (
    <div className={`${theme} bg-neutral-primary p-6`}>
      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {/* Search Input with Autocomplete */}
        <div className="relative flex-1" ref={searchRef}>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none z-10">
            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchSuggestions(true);
            }}
            onFocus={() => setShowSearchSuggestions(true)}
            className="block w-full p-2.5 ps-10 text-sm text-heading border border-default rounded-base bg-neutral-secondary-soft focus:ring-brand focus:border-brand"
            placeholder="Search products..."
            autoComplete="off"
          />
          {/* Search Suggestions Dropdown */}
          {showSearchSuggestions && searchSuggestions.length > 0 && (
            <div className="absolute z-20 w-full mt-1 bg-neutral-primary border border-default rounded-base shadow-lg max-h-60 overflow-auto">
              {searchSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-full px-4 py-2.5 text-sm text-left text-heading hover:bg-neutral-secondary-soft focus:bg-neutral-secondary-soft focus:outline-none"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    setShowSearchSuggestions(false);
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Select with Autocomplete */}
        <div className="relative sm:w-48" ref={categoryRef}>
          <button
            type="button"
            onClick={() => setShowCategorySuggestions(!showCategorySuggestions)}
            className="flex items-center justify-between w-full p-2.5 text-sm text-heading border border-default rounded-base bg-neutral-secondary-soft focus:ring-brand focus:border-brand"
          >
            <span>{selectedCategory === "All" ? "All Categories" : selectedCategory}</span>
            <span className="icon-[flowbite--chevron-down-outline] w-4 h-4 text-body"></span>
          </button>
          {/* Category Suggestions Dropdown */}
          {showCategorySuggestions && (
            <div className="absolute z-20 w-full mt-1 bg-neutral-primary border border-default rounded-base shadow-lg max-h-60 overflow-auto">
              {categorySuggestions.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`w-full px-4 py-2.5 text-sm text-left hover:bg-neutral-secondary-soft focus:bg-neutral-secondary-soft focus:outline-none ${
                    selectedCategory === category ? "text-brand font-medium" : "text-heading"
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowCategorySuggestions(false);
                  }}
                >
                  {category === "All" ? "All Categories" : category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4">
        <p className="text-sm text-body">
          Showing <span className="font-medium text-heading">{filteredRows.length}</span> of{" "}
          <span className="font-medium text-heading">{output.tableData.rows.length}</span> products
        </p>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              {output.tableData.columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={output.tableData.columns.length} className="px-6 py-8 text-center text-body">
                  No products found matching your criteria.
                </td>
              </tr>
            ) : (
              filteredRows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`bg-neutral-primary ${rowIndex < filteredRows.length - 1 ? "border-b border-default" : ""}`}
                >
                  <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {row.name}
                  </th>
                  <td className="px-6 py-4">{row.color}</td>
                  <td className="px-6 py-4">{row.category}</td>
                  <td className="px-6 py-4">{row.price}</td>
                  <td className="px-6 py-4">{row.stock}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTableWidget;

mountWidget(<DataTableWidget />);
