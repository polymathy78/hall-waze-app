import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Hall-Waze</h1>
      {/* Your app content */}
    </div>
  );
}

export default withAuthenticator(App);
