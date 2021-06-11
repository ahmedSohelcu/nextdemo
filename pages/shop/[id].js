import React, { useEffect,useState, Fragment } from "react";
import styles from "../../styles/blog.module.css";
import SingleBlog from '../../components/SingleBlog'
import Layout from '../../components/Layout'
import Image from 'next/image'
import {useRouter} from 'next/router'

const BlogDetails = () => {
  const router = useRouter();
  const [product, setProduct] = useState({});

  useEffect(async () => {
   const res = await fetch(`https://demostore.uparzon.com/api/uparzonweb/get_product_details?product_id=${router.query.id}`);
   const data = await res.json();   
   setProduct(data.data);
   console.log(data.data);
  },[]);
/*
  useEffect(async () =>  {
    setIsLoading(true);
    await axios.get("http://www.featurebangla.com/api/home_news")
        .then((response) => {
            setCategories(response.data.news_categories);
            setGalleries(response.data.photo_galaries);
            console.log(response.data.photo_galaries);
            setIsLoading(false);
        }).catch((error)=> {
            console.log(error.response)
        })
},[]);
*/


  console.log(router);
  console.log('product id is :'+router.query.id);
    return (
        <Fragment>
          <Layout>
            <h4 className = { styles.title } >
              {product.name}
            </h4>
            <div className = { styles.container }>
              <h2>single product's id is <code> {router.query.id}</code> </h2>
            
              {/* <Image src="/download.jpg" width={220} height={200} alt="fsdsaf"/> */}

            </div> 
          </Layout>
        </Fragment >
    );
};

export default BlogDetails;