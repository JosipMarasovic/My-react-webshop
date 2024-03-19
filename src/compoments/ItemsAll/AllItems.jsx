import { useParams } from "react-router-dom"


function AllItems(){
    const { category } = useParams()
    console.log(category)
    return(
        <>

        <h3>Ovo je All items</h3>
        </>
    )
}

export default AllItems