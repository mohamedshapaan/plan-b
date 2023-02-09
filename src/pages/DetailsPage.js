import { Component } from "react";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import GetCourseDetails from "../apis/GetCourseDetails";
function  DetailsPage() { 
        const [data,setdata]=useState({})
        const { id } = useParams();
        console.log(id);
        useEffect(()=>{
            GetCourseDetails(id);
        })
        return (
            <>fffffffff</>
              )
    
}

export default DetailsPage;
