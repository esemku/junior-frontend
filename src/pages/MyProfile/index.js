import React, { useState, useEffect } from "react"
import axios from 'axios'

import GitHubSection from './GitHubSection'


const MyProfile = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('https://api.github.com/users/esemku')
      .then( res => setData(res.data) )
  },[])

  const { name, avatar_url } = data

  return (
    <GitHubSection name={name} avatar_url={avatar_url}/>
  )
}


export default MyProfile
