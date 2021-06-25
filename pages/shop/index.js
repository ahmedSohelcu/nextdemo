import React,{Fragment, useState, useEffect } from 'react';
import styles from "../../styles/blog.module.css";
import SingleProduct from '../../components/SingleProduct';
import Layout from '../../components/Layout';
import blogStyles from "../../styles/blog.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Shop = (props) => {

// useEffect(() => {
//   alert('hello..');
//   //this.getStaticProps();
// },[]);

 const productsComponent = (
    props.data?.products.random_products?.map((product,index)=>
    <div key="{product.id}" className = { blogStyles.single_blog }>
    <h4 className = { blogStyles.blog_title }>
      {product.name}
    </h4>
  
    <Image src={ "http:"+product.photo} width={550} height={350}/> {product.id}

    <div key="product.id" className={blogStyles.buttonArea}>
      <a className={blogStyles.addToCart} className ={blogStyles.shop_continue_button}>Add to cart</a>
      <a className={blogStyles.productDetailsButton} myData={product} href={`/shop/${product.id}`}  className ={blogStyles.shop_continue_button }>
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
// export async function //getStaticProps(){
  const res  = await fetch('https://demostore.uparzon.com/api/uparzonweb/get_home_products');
  const data = await res.json();
  return {
    props:{
       data
    }
   // revalidate: 10, // In seconds  
  }
}


export default Shop;

// <786></AHMEDcu>