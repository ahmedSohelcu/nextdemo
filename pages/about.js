import React, { Fragment } from "react";
import styles from "../styles/About.module.css";
import Layout from '../components/Layout'


const About = () => {
    return (
        <Fragment>
          <Layout>
            <h4 className = { styles.title } > Hello form About page.. </h4>
            <div className = { styles.container } >
              text 2...                         
            </div> 
          </Layout>
        </Fragment >
    );
};

export default About;