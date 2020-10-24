import React, { useEffect } from 'react'


const GitHubSection = ({ name, avatar_url }) => {

  useEffect(() => {
    console.log('name: ', name);
    console.log('avatar_url: ', avatar_url);
  },[name])

  return (
    <div>GitHubSection!</div>
  )
}


export default GitHubSection
