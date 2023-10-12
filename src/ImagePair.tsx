import cat from "./assets/cat.jpg"
import whiteCat from "./assets/whitecat2.jpg"
import blackCat from "./assets/blackcat.jpg"
import "./ImageLayout.css"
import { useState } from "react"

function ImagePair(){
    const images = [cat,whiteCat,blackCat]
    const [imageText, setImageText] = useState("")
    const handleImageClick = (imageName: String) => {
        if(imageName == cat){
            setImageText ( "Orange Cat Clicked")
        }
        else if(imageName == whiteCat){
            setImageText ( "White Cat Clicked")
        }
        else{
            setImageText ( "Black Cat Clicked")
        }
    }
    const imageTags = images.map(imageName => (
        <img src={imageName} onClick = {() => handleImageClick(imageName)}></img>
    
    ))
    return(
        <>
        <div className = "divImages">{imageTags}</div>
        <p>{imageText}</p>
        </>
    )
}
export default ImagePair;