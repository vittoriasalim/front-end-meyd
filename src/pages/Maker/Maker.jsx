import {React, useEffect } from "react";
import "./maker.scss";
// import { useState } from 'react'
import axios from "axios";
import {Link, useLocation } from "react-router-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Maker = () => {

  const [inputs, setInputs] =  useState({
    state_name:"%",
    post_code:"%",
    clothing_type:"%" //default value
  })
  const [post, setPosts] = useState([]);

  const handleChangeF = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))

   
  }
  const handleSubmit =async (e) =>{
    try {
      e.preventDefault();
      
      const res = await axios.post(`/posts/filter`, inputs);

      setPosts(res.data);
 
    } catch (err) {
      console.log(err);
    }
  
    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(`/posts/`);
        // // const data = await res.json();

        // setPosts(res.data);
        // console.log(res.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container-job">
      <form>
        <input type="text" onChange={handleChangeF} className="filter-input"  name= "state_name" placeholder="State Name"></input>
        <input type="number" onChange={handleChangeF} className="filter-input" name= "post_code" placeholder="Post Code"></input>
        <select className="filter-input" name="clothing_type" onChange={handleChangeF}>
              <option  value="" >Type Of Clothing</option>
              <option  value="Sari" >Sari</option>
              <option  value="Blouse" >Blouse</option>
              <option value="Dress">Dress</option>
              <option value="Ethnic Wear">Ethnic Wear</option>
        </select>
        <input type="button" onClick={handleSubmit} className="filter-butt"value="FILTER"></input>
      </form>
      <div className="jobs" id="jobs">
        <p>{post}</p>

      </div>
    </div>
  );
};

export default Maker;
