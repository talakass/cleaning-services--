import React from 'react'
import cookies from "js-cookie";
import { Link } from 'react-router-dom';
export default function Jareb() {

    const auth = window.localStorage.getItem("email");
    const auth1 = window.localStorage.getItem("status");

  return (<>
    <div>Jareb</div>
{(auth==null) ? (
<Link to="/login">

<h1>fout ya guest</h1>

</Link>) : (

<Link to="/">

<h1>fout ya customer</h1>

</Link>)
}


</>
  )
}

