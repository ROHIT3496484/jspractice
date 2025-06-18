import React, { useEffect } from 'react'

const Post = ({val, setPageno}) => {
  useEffect(()=>{
    const observer = new IntersectionObserver(
      (params)=>{
        if(params[0].isIntersecting){
          observer.unobserve(lastimg);
          setPageno((pageno)=> pageno+1);
        }
      },
      {threshold: 0.5}
    );
    const lastimg = document.querySelector(".img:last-child")
    if(!lastimg) return;
    observer.observe(lastimg);
    return ()=>{
      if(lastimg)
        observer.unobserve(lastimg);
      observer.disconnect();
    }
  },[setPageno, val])
  return (
    <div>
      {
        val.map((item) => {
          return (
            <div key={item.id} className="post">
              <img src={item.download_url} alt="post"  className="img" height={150}/>
              
            </div>
          )
        })
      }
    </div>
  )
}

export default Post
