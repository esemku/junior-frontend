import React, { useState, useEffect } from "react"
import axios from 'axios'

import * as Section from "components/PageSection"
import { Root, GitHubSection, Name, Avatar } from './styles'


const MyProfile = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('https://api.github.com/users/esemku')
      .then( res => setData(res.data) )
  },[])

  const { name, avatar_url } = data

  return (
    <Section.Wrapper>
      <Section.Content>
        <Section.Header>
          <Name>{name}</Name>
          <Avatar avatar_url={avatar_url} />
        </Section.Header>
      </Section.Content>
    </Section.Wrapper>

  )
}


export default MyProfile
