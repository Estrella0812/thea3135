import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import GitHubRepoCard from './repocard';
import styled from 'styled-components';

const ScrollableContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 16px;
`;

function Github() {
  const [projects, setProjects] = useState([]);
  const GITHUB_TOKEN = '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';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/estrella0812/repos`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        });

        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
    </>
  );
}

export default Github;