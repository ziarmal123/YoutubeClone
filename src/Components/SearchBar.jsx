import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper,IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = (e) => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate=useNavigate();
  console.log("SerchTerm",searchTerm)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
    }
  }
  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{borderRadius:20,border:'1px soild #e3e3e3',pl:2,boxShadow:'none' , mr:{sm:5}}}
    >
        <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
        <IconButton type='submit' sx={{p:'10px',color:'red'}}><Search/></IconButton>
    </Paper>
  )
}

export default SearchBar