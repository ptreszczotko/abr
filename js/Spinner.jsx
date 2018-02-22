import React from 'react';
import { Container, Segment, Dimmer, Loader } from 'semantic-ui-react';

const Spinner = () => (
  <Container style={{ marginTop: '7em' }}>
    <Segment basic>
      <Dimmer active inverted>
        <Loader size="large">Loading...</Loader>
      </Dimmer>

    </Segment>
  </Container>
);

export default Spinner;
