import React from 'react';


/** 
 * model 和 component 串联之前，product.js的最开始的样子
 * 
*/
// const Products = (props) => (
//     <h2>List of products</h2> 
// );

// export default Products;

/** 
 * 改造
*/
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products1 = ({ dispatch, products }) => {
    function handleDelete(id){
        dispatch({
            type : 'products/delete',
            payload : id,
        })
    }

    return (
        <div>
            <h2>list of products</h2>
            <ProductList onDelete={handleDelete} products={products}/>
        </div>
    )
}

export default connect(({products})=>({products}))(Products1);