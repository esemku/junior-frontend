import React, { useState, useEffect } from "react"
import axios from 'axios'

import * as Section from "components/PageSection"
import { Name, Avatar } from './styles'
import Loader from 'react-loader-spinner'
import { theme } from 'styles/theme'


const MyProfile = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://api.github.com/users/esemku')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
  },[])

  const { name, avatar_url } = data

  return (
    <Section.Wrapper>
      <Section.Content>
        <Section.Header>
          {loading ?
            <Loader
              style={{ width: '48rem', textAlign: 'center'}}
              type="ThreeDots"
              color={theme.color.loader}
              height={70}
              width={70}
            /> :
            <>
              <Name>{name}</Name>
              <Avatar avatar_url={avatar_url} />
            </>}
        </Section.Header>
      </Section.Content>
    </Section.Wrapper>

  )
}


export default MyProfile
