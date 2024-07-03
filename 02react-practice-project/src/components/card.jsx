

export default function Card(props){
    return (
        <>
            <div style={{boxShadow:"1px",width:"25%",height:"10%", margin:"2px",flexWrap:"wrap"}}>
            <img src={props.data.image} alt="image not avalable"  style={{width:"100px",height:"100px"}}/>
            <h3>{props.data.title}</h3>
            <h5>{props.data.description}</h5>
            <h5>{props.data.price}</h5>
            <h5>rating : {props.data.rating.rate}  stock avaliable:{props.data.rating.count}</h5>
            </div>
        </>
    )
}

