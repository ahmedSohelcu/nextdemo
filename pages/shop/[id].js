import React, { Fragment } from "react";
import styles from "../../styles/blog.module.css";
import SingleBlog from '../../components/SingleBlog'
import Layout from '../../components/Layout'
import Image from 'next/image'
import {useRouter} from 'next/router'

const BlogDetails = () => {
  const router = useRouter();

  console.log(router);
  console.log('product id is :'+router.query.id);
    return (
        <Fragment>
          <Layout>
            <h4 className = { styles.title } > from single product details file. </h4>
            <div className = { styles.container }>
              <h2>single product's id is <code> {router.query.id}</code> </h2>

              {/* <Image src="/download.jpg" width={220} height={200} alt="fsdsaf"/> */}

            </div> 
          </Layout>
        </Fragment >
    );
};

export default BlogDetails;