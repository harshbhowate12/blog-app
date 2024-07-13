import "./blogView.css";
import blogdata from "../../data";
import { useParams } from "react-router-dom";

function BlogView() {
    const  {id}=useParams();

    const blogAtt=blogdata.find((blogdataOBJ)=>{
        if(blogdataOBJ.id===id){
            return true;
        }else{
            return false;
        }
    })
  return (
    <div className="main-view">
      <div className="detailed-container">
        <img src={blogAtt.image} alt=".." className="top-img"></img>
        <div className="other-info">
            <div className="author-data">
                   <img src={blogAtt.author.avator} alt=".." className="author-img"></img>
                   <p className="author-name">{blogAtt.author.name}</p>
                   <p className="author-date">{blogAtt.date}</p>
            </div>
            <h1 className="title-head">{blogAtt.title}</h1>
            {
                blogAtt.categories.map((category,i)=>{
                    return <span key={i} className="categories">{category}</span>
              })
            }
            <div className="content-container">
                <p className="content-1">{blogAtt.content.substring(0,416)}</p>
                <p className="content-2">{blogAtt.content}</p>
            </div>
        </div>
      </div>   
    </div>
  )
}

export default BlogView;