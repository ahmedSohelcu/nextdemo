import styles from "../styles/blog.module.css";
import Link from 'next/link'
import Image from 'next/image'

const SingleProduct = () => {
// export default function SingleBlog(){
  return(
    <div className = { styles.single_blog }>
      <h4 className = { styles.blog_title }>
       Product title
      </h4>
      
      <Image src="/download (1).jpg" width={550} height={350} alt="fsdsaf" />
      <div className = { styles.blog_content }>
      prodcut content goose here.prodcut content goose here.prodcut content goose here.
      .prodcut content goose here.
      <br/>
      </div>
      <div>
        <Link href="/shop/5" className ={styles.shop_continue_button}>Add to cart</Link>
        <Link className ={styles.shop_continue_button} href="/shop/5">10tk</Link>
        <Link className ={styles.shop_continue_button } href="/shop/5">
          details
        </Link>
      </div> 
    </div>
  );
}

export default SingleProduct;

