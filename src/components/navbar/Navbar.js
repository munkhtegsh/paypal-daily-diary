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

class Navbar extends Component {
    constructor() {
        super();
        this.state = {      
            search: ''              
        }        
    }

    render() {
        return (
            <Container>
                <Logo /> 
                <Input  type='text' 
                        value={this.state.search} 
                        onChange={(e) => this.setState({search: e.target.value})}
                />

            </Container>
        )
    }
}

export default Navbar;