import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet'
import CommonSection from '../components/Ui/CommonSection/CommonSection'
import products from "../assets/fake-data/products"
import ProductCard from '../components/Ui/Product-Card/ProductCard'
import "../components/styles.css/All-Foods.css"
import ReactPaginate from 'react-paginate'
import "../components/styles.css/Pagination.css"

function AllFoods() {
  
  const [searchTerm, setSearchTerm] = useState("")
  
  const [pageNumber, setPageNumber] = useState(0)
  
  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });
  
  const productPerPage = 12
  
  const visitedPage = pageNumber * productPerPage
  
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
  
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  
  const changePage = ({selected})=>{
    setPageNumber(selected)
  }
  
  return (
    <Helmet title="All Foods">
        <CommonSection title = "All Foods" />
        
        <section>
          <Container>
            <Row>
              <Col lg = "6" md = "6" sm = "6" xs = "12">
                <div className='search__widget d-flex align-items-center justify-content-between'>
                  <input type= "text" placeholder= "I'm Looking For..." value={searchTerm} onChange = {e => setSearchTerm(e.target.value)}/>
                  <span><i className='ri-search-line'></i></span>
                </div>
              </Col>
              
              <Col lg = "6" md = "6" sm = "6" xs = "12" className='mb-5'>
                <div className='sorting__widget text-end'>
                  <select className='w-100'>
                    <option>Default</option>
                    <option value= "ascending">Alphabetically A-Z</option>
                    <option value= "descending">Alphabetically Z-A</option>
                    <option value= "high-price">High Price</option>
                    <option value= "low-price">Low Price</option>
                  </select>
                </div>
              </Col>
              
              {
                
                displayPage.map(item =>(
                <Col xl = "3" lg = "4" md = "6" sm = "12" xs = "12" key={item.id} className = "mb-4">
                  <ProductCard item = {item}/>
                </Col>
                ))
              }
              
              <div>
                <ReactPaginate
                   pageCount={pageCount}
                   onPageChange={changePage}
                   previousLabel={"Prev"}
                   nextLabel={"Next"}
                  containerClassName=' paginationBtns '
                />
              </div>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default AllFoods