import React from "react"

const Image = ({img}) => {
    return (<img  src={process.env.PUBLIC_URL + '/assets/images/'+img} className="img-fluid film-image" alt="Responsive image"/>)
}

export default Image;