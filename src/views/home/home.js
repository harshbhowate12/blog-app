import "./home.css";
import blogdata from "../../data";
import Blogcard from "../../components/blogcard/blogcard";

function Home() {

  return (
    <>
      <div className="home-info">
        <div className="heading">
          <p className="head1">Connect and build Everywhere</p>
          <p className="head2">Create a beautiful blog that fits your style. Choose from a selection of easy-to-use</p>
          </div>
      </div>
      <div className="cards-head">
         <h2>What's new</h2>
      </div>
      <div className="cards-container">
       {
        blogdata.map((blogdataObj,i)=>{
            const{
                id,
                title,
                content,
                author,
                date,
                categories,
                image
            }=blogdataObj

            return(
                <Blogcard
                  key={i}
                  id={id}
                  title={title}
                  content={content}
                  author={author}
                  date={date}
                  categories={categories}
                  image={image}
                />    
            )
        })
       }
       </div>
    </>
  )
}

export default Home;