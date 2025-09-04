import React from 'react'
import './Property.css'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../../utils/api'
import { PuffLoader } from 'react-spinners'
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai'
import { MdMeetingRoom } from 'react-icons/md'
import { FaShower } from 'react-icons/fa'
const Property = () => {

const {pathname} = useLocation()
console.log(pathname);
const id = pathname.split("/").slice(-1)[0]
// console.log(id);


const {data, isLoading, isError} = useQuery(["resd", id], ()=> getProperty(id))

console.log(data);

if(isLoading){
    return (
        <div className="wrapper">
            <div className="flexCenter paddings">
                <PuffLoader/>
            </div>
        </div>
    )
}

if(isError){
    return(
        <div className="wrapper">
            <div className="flexCenter paddings">
                <span>Error while fetching the property details</span>
            </div>
        </div>
    )
}

  return (
    <div className='wrapper'>
        <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
            <AiFillHeart size={24} color='white'/>
        </div>
    {/* image */}
    <img src={data?.image} alt="home image" />

    <div className="flexCenter property-details">
        {/* left */}
        <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
                <span className='primaryText'>{data?.title}</span>
                <span className='orangeText' style={{fontSize:'1.5rem'}}>$ {data?.price}</span>
            </div>
            {/* facilities */}
            <div className="flexStart facilities">
                {/* Bathrooms */}
                <div className="flexStart facility">
                    <FaShower size={20} color="#1F3E72"/>
                    <span>{data?.facilities?.bathroom} Bathrooms</span>
                </div>
                {/* parkings */}
                <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72"/>
                    <span>{data?.facilities?.parkings} Parkings</span>
                </div>
                {/* Rooms */}
                <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72"/>
                    <span>{data?.facilities?.bathrooms} Rooms</span>
                </div>
            </div>
            {/* description */}
            <span className='secondaryText' style={{textAlign: "justify"}}>
            {data?.description}
            </span>
        </div>
        {/* right */}
        <div className="right">
            this is right side
        </div>
    </div>
        </div>
    </div>
  )
}

export default Property





