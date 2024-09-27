import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.element.query.value.trim();
    if (query) {
      setSearchParams({ query });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Enter..."
        defaultValue={searchParams.get("query") || ""}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
