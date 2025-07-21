import React from 'react'

const CardComponent = ({image, title, description, myList =[], bulletIcon = "➤", cardClass="", cardText=""}) => {
  return (
    <div className={`card rounded shadow card-hover ${cardClass}`}>
        <div className='card-body'>
            <div className='d-flex justify-content-center align-item-center mb-3'>
            <img src={image} alt="imageweb" style={{maxWidth: "50px", height: "auto"}} />
            </div>
            <h2 className={` card-title d-flex justify-content-center align-item-center mb-2 ${cardText}`}>{title}</h2>
            <h6 className={`card-text ${cardText}`}>{description}</h6>
            {myList.length > 0 && (

                <ul className={`mt-3 list-unstyled ${cardText}`}>
                    {myList.map((item, index)=>(
                         <li key={index} className='d-flex align-items-start mb-2'>
                         <span className='me-3 text-warning '>{bulletIcon}</span>
                         <span>{item}</span>
                         </li>
                             
                            
                       
                         
                        
                        
                    ) )}

                </ul>
            )}

        </div>

    </div>
  )
}

export default CardComponent