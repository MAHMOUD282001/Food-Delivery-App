import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import category01 from "../../../assets/images/category-01.png"
import category02 from "../../../assets/images/category-02.png"
import category03 from "../../../assets/images/category-03.png"
import category04 from "../../../assets/images/category-04.png"

import "../../styles.css/Category.css"

const categoryData = [
    {
        display: "Fast Food",
        imgUrl : category01
    },
    
    {
        display: "Pizza",
        imgUrl : category02
    },
    
    {
        display: "Asian Food",
        imgUrl : category03
    },
    
    {
        display: "Row Food",
        imgUrl : category04
    }
]


function Category() {
  return (
    <Container>
        <Row className='all-cat'>
            {
            categoryData.map((item, index)=>(
                <Col lg = "3" md = "4" sm = "6" xs = "6" className='mb-3 cat'>
                    <div className='category__item d-flex align-items-center gap-3'>
                        <div className='category__img'>
                            <img src= {item.imgUrl} alt = {item.display}/>
                        </div>
                        
                        <h6>{item.display}</h6>
                    </div>
                </Col>
            ))
            }
        </Row>
    </Container>
  )
}

export default Category