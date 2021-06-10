import styles from "../styles/blog.module.css";
import Image from "next/image";

const SingleBlog = () => {
// export default function SingleBlog(){
  return(
    <div className = { styles.single_blog }>
      <h4 className = { styles.blog_title }>
        Hello blog title..
      </h4>
      <div className = { styles.blog_content }>
        lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf 
        lorem sjfdsak asfj dsafsafsa fksa fksa fasf sakfsaa fksa salf salf 
        
        <Image src="/download.jpg" width={200} height={150} alt="fsdsaf" />

        <a className = { styles.blog_continue_button } href="/blog/5">details</a>
      </div>
    </div>
  );
}

export default SingleBlog;

