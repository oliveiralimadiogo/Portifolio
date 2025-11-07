export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar projeto..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-md border border-green-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  );
}
