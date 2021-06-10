import React, { Fragment } from "react";
import styles from "../../styles/blog.module.css";
import SingleBlog from '../../components/SingleBlog'
import Layout from '../../components/Layout'

const Index = () => {
  // for(let i=0; i<16; i++){
  //   <SingleBlog></SingleBlog>
  // }

    return (
        <Fragment>
          <Layout>
            <h4 className = { styles.title } > Hello form Blog page.. </h4>
            <div className = { styles.container } >
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>

              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>

              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
              <SingleBlog></SingleBlog>
            </div> 
          </Layout>
        </Fragment >
    );
};

export default Index;