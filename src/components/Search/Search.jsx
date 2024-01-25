import "../Search/search.css";
const Search = ()=>{
    return(
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" spellcheck="false" placeholder="Foods Drinks Snacks" aria-label="Search"/>
        <button className="btn btn-dark " type="submit">Search</button>
      </form>
    )
}

export default Search;