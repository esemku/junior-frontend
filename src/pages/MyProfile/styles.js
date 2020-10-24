import styled from 'styled-components'


export const Name = styled.div`
  margin: 3rem 1.5rem 1.5rem;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const Avatar = styled.div`
  background-image: url('${props => props.avatar_url}');
  height: 15rem;
  width: 15rem;
  margin-left: 1.5rem;
  background-size: cover;
  border-radius: .5rem;
`
