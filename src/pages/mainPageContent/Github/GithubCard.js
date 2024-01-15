import styled from 'styled-components'
import React from 'react'

const Card = styled.div`
    border: 1px;
`

function GithubCard({ repo }) {
    return (
      <Card>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </Card>
    );
  }
  
  export default GithubCard;