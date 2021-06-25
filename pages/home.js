import React, { Fragment } from "react";
import styles from "../styles/About.module.css";
import Layout from '../components/Layout'
import Image from 'next/image'

const ContactUs = () => {

  const students = [
    {name:'Ahmed',roll:'151'},
    {name:'Asad',roll:'565'},
    {name:'Rashed',roll:'554'},
    {name:'Asad',roll:'565'},
    {name:'Rashed',roll:'554'},
  ];

    return (
        <Fragment>
          <Layout>
              <h4 className = { styles.title } > Hello form home page.. </h4>
          </Layout>
        </Fragment >
    );
};

export default ContactUs; 