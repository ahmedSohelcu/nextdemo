import React, { Fragment } from "react";
import styles from "../../styles/blog.module.css";
import SingleProduct from '../../components/SingleProduct'
import Layout from '../../components/Layout'
import Image from 'next/image'

const Shop = () => {
    return (
        <Fragment>
          <Layout>
            <h4 className = { styles.title } > Hello form Gallery page.. </h4>
            <div className = { styles.container } >
            <Image src="/download.jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/maxresdefault.jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/download.jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={230} height={200} alt="fsdsaf" />

            <Image src="/download (1).jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/download.jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/maxresdefault.jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={230} height={200} alt="fsdsaf" />


            <Image src="/download.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/maxresdefault.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/maxresdefault.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={110} height={100} alt="fsdsaf" />

            <Image src="/download (1).jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/download.jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/maxresdefault.jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={230} height={200} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={230} height={200} alt="fsdsaf" />


            <Image src="/download.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/maxresdefault.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/maxresdefault.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download.jpg" width={110} height={100} alt="fsdsaf" />
            <Image src="/download (1).jpg" width={110} height={100} alt="fsdsaf" />

            </div> 
          </Layout>
        </Fragment >
    );
};

export default Shop;