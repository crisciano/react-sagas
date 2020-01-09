import React from 'react';
import PropTypes from 'prop-types'
import './Home.css';
import { compose } from 'recompose'
import Clients from '../../componets/Clients/Clients';
import Container from '@material-ui/core/Container';

function Home({
  state
}) {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container >
        {/* <Pets /> */}
        <Clients />
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
      </Container>
    </React.Fragment>
    // <div className="App">
    //   <Clients />
    // </div>
  );
}

Home.protoTypes = {
  state: PropTypes.array
}

export default compose(

)(Home);
