import React from 'react'
import './Properties.css'
import  {SearchBar}  from '../../components/SearchBar/SearchBar'
import useProperties from '../../hooks/useProperties'


const Properties = () => {
  const {data, isError, isLoading} = useProperties();
  console.log(data);
  
  return (
    <div className="wrapper">
        <div className="flexColCenter paddings innerWidth properties-container">
          <SearchBar/>
        </div>
    </div>
  )
}

export default Properties