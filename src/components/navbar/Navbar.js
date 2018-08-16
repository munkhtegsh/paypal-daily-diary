import React from 'react';
import styled from 'styled-components';
import {Input} from 'antd';
import 'antd/dist/antd.css';

const Search = Input.Search;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7vh;
    box-sizing: border-box;
    padding: 0 1rem;
    box-shadow: 0 1px 5px #ccc;
    margin-bottom: 1rem;
`

const Logo = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80%;
    font-weight: bold;
`

export default ({search, searchInput}) => (
    <Container>
        <Logo> DAILY DIARY </Logo> 
        <Search
            name="search"
            value={search}
            placeholder="Search text"
            onChange={(e) => searchInput(e)}
            style={{ width: 200 }}
      />

    </Container>
)

