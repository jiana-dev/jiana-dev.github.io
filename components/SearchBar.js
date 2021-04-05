export default function Searchbar() {
  return (
    <div className="col-6 d-block d-lg-none text-right">
      <form action="#" className="search-form d-inline-block">
        <div className="d-flex">
          <input type="text" className="form-control" placeholder="Search..."/>
          <button type="submit" className="btn btn-secondary" ><span className="icon-search"></span></button>
        </div>
      </form>
    </div>
  )
}
