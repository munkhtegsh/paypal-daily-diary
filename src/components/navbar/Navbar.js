import React, {Component} from 'react';
import styled from 'styled-components';
import {Input} from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getTitles} from '../../ducks/reducer';

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

class Navbar extends Component {
    render() {
        return (
            (
            <Container>
                <Link to='/api/v1/pages/'>
                    <Logo onClick={() => this.props.getTitles}> DAILY DIARY </Logo>
                </Link>
                <Search
                    name="search"
                    placeholder="Search text"
                    onKeyPress={(e) => this.props.searchInput(e)}
                    style={{ width: 200 }}
                />
            </Container>
            )
        )
    }
}

export default connect(null, {getTitles})(Navbar);

// export default ({searchInput}) => (
//     <Container>
//         <Link to='/api/v1/pages/'>
//             <Logo> DAILY DIARY </Logo>
//         </Link>
//         <Search
//             name="search"
//             placeholder="Search text"
//             onKeyPress={(e) => this.props.searchInput(e)}
//             style={{ width: 200 }}
//       />

//     </Container>
// )



// name="search"
// value={search}
// placeholder="Search text"
// onKeyPress={(e) => searchInput(e)}
// style={{ width: 200 }}
