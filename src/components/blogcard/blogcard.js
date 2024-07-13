import "./blogcard.css";
import { Link } from "react-router-dom";

function Blogcard({id,title,content,author,date,categories}) {
  return (
    <Link className="blogcard" to={`/blog/${id}`}>
        <h2 className="title">{title}</h2>
        <p className="content-preview">{content.substring(0,100)}...</p>
        <div className="authore-card">
            <img src={author.avator} alt="..2" className="authore-img"/>
            <p className="name">{author.name}</p>
            <p className="date">{date}</p>
        </div>
        {categories.map((category,i)=>{
            return <span key={i} className="categories-card">{category}</span>
        })}
    </Link>
  )
}

export default Blogcard;