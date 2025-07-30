import React from 'react'

const ReInfiniteScroll = ({page, val}) => {
    
  return (
    <div>
        {val.map((item)=>{
            <img src={item.download_url} alt="img" />
        })}
      
    </div>
  )
}

export default ReInfiniteScroll
