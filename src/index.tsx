import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './Routes/index';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-app-polyfill/ie11';
import ReduxStore from './Redux/store/store';
const { Persistor , Store } = ReduxStore;


//import utils
//import { definePolyfills, scrollTop } from './Utils';

// import routes


export function Root() {

    // definePolyfills();
    // scrollTop();



    return (
        <Provider store={ Store } >
            <PersistGate persistor={ Persistor } loading={ <span></span> } >
                <BrowserRouter basename={ '/' } >
                    {/* <ScrollContext> */}
                        <AppRoutes />
                    {/* </ScrollContext> */}
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render( <Root />, document.getElementById( 'root' ) );