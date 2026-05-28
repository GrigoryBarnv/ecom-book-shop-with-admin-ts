"use client";

export default function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="mb-6 flex w-full max-w-2xl items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search books by title or author"
        className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
      />
      <span className="text-sm text-slate-500">🔍</span>
    </div>
  );
}
