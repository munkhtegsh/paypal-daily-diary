import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 5vh;
    background: red;
    box-sizing: border-box; 
`

const Logo = styled.div `
    background: blue;
    width: 100px;
    height: 80%;
`

const Input = styled.input`
    float: right;

`

export default ({search, searchInput}) => (
    <Container>
        <Logo /> 
        <Input  type='text' name='search'
                value={search} 
                onChange={(e) => searchInput(e)}
        />

    </Container>
)

