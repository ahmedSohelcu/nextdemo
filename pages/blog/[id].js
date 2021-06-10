import React, { Fragment } from "react";
import styles from "../../styles/blog.module.css";
import SingleBlog from '../../components/SingleBlog'
import Layout from '../../components/Layout'
import Image from 'next/image'

const BlogDetails = () => {
    return (
        <Fragment>
          <Layout>
            <h4 className = { styles.title } > from single blog file. </h4>
            <div className = { styles.container }>
            <h2>Blog title for details page....</h2>
            <Image src="/download.jpg" width={550} height={350} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={550} height={350} alt="fsdsaf" />
            <p>
              lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa  
            </p>            
            <Image src="/download (1).jpg" width={550} height={350} alt="fsdsaf" />
            <p>
              lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa  fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa 
            </p>
            <p>
              lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa ksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf lorem sjfdsak asfj dsafsafsa 
              fksa fksa fasf sakfsaa fksa salf salfakfsaa 
            </p>
            </div> 
          </Layout>
        </Fragment >
    );
};

export default BlogDetails;