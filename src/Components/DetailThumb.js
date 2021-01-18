import React from 'react'

export default function DetailThumb({item,setThumb}) {
    return (
        <div className="thumb">
        {
            item.images.map((img, index) =>(
                <img src={img} alt="" key={index} onClick ={() => (setThumb(index))}/>
            ))
        }
    </div>
    )
}
