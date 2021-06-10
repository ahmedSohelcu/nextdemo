import React, { Fragment } from "react";
import styles from "../styles/About.module.css";
import Layout from '../components/Layout'

const ContactUs = () => {
    return (
        <Fragment>
          <Layout>
            <h4 className = { styles.title } > Hello form contact us.. </h4>
            <div className = { styles.container } >
              text 2...
            </div> 
          </Layout>
        </Fragment >
    );
};

export default ContactUs;