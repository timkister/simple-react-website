import React from 'react';
import Homepage from '../ui/Homepage';
import StateProvider from './StateProvider';

class App extends React.Component {
    render() {
        return(
            <StateProvider>
                <Homepage />
            </StateProvider>
        )
    }
}

export default App;