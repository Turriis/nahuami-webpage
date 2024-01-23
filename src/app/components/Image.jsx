import Image from "next/image";
import img1 from "../media/8BC73340-4D2C-4C8C-B677-3EC050C9A062.JPG";

const Images = () => {
    return(
        <div className="container mx-auto p-10">
            {/* <ul>
                {images.map((image, index) => {
                    return(
                        <li key={index}>
                            <h1>{image.name}</h1>
                            <img src="{image.src}" alt="{image.name}" />
                        </li>
                    )
                    </ul>
                })} */}
            
             <Image
            src={img1}
            alt="art"
            className="container mx-1 flex h-50 w-40"
            /> 
        </div>  
    )

}

export default Images;