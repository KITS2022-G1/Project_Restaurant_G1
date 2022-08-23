import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useParams } from "react-router";

export default function TestPage(props){
const [data, setData] = useState([]);

const params = useParams();

useEffect(()=> {
    setData(props.data);
})

console.log(params.totalPrice);

return(
    <>
    <h1>{data}</h1>
    </>
)

}

