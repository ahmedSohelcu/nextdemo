import React, { Fragment } from "react";
import styles from "../../styles/blog.module.css";
import SingleProduct from '../../components/SingleProduct'
import Layout from '../../components/Layout'
import blogStyles from "../../styles/blog.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Shop = (props) => {

// const hello = function(e){
//   e.preventDefault();
//   alert('hello...');
// }

 const productsComponent = (
    props.data.products.random_products?.map((product,index)=>
    <div key="{product.id}" className = { blogStyles.single_blog }>
    <h4 className = { blogStyles.blog_title }>
      {product.name}
    </h4>
  
    <Image src={ "http:"+product.photo} width={550} height={350}/>

    <div className={blogStyles.buttonArea}>
      <a className={blogStyles.addToCart} onClick={()=>hello() } href="/shop/5" className ={blogStyles.shop_continue_button}>Add to cart</a>
      <a className={blogStyles.productDetailsButton}  className ={blogStyles.shop_continue_button } href="/shop/5">
        Product details
      </a>
    </div> 
  <style>
    {`
    .blog_single_blog__122se {
      width: 223px;
      display: inline-block;
      border: 1px solid #ddd;
      padding: 10px;
      margin: 5px;
      border-radius: 5px;
      line-height: 25px;
    }
    .blog_buttonArea__2ThKv a {
      margin: 1px 5px;
    }
    
    `}
  </style>
</div>
));



    return (
        <Fragment>
          <Layout>
            <h4 className = { styles.title } > Hello form Shop page.. </h4>
            <div className = { styles.container }>             
              {productsComponent}                      
            </div> 
          </Layout>
        </Fragment >
    );
};

//============================================
//getServerSideProps
//============================================
export async function getServerSideProps(){
  const res = await fetch('https://demostore.uparzon.com/api/uparzonweb/get_home_products');
  const data = await res.json();
  return {
    props:{ data}  
  }
}


export default Shop;