import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import 'react-app-polyfill/ie11';

import { PersistGate } from 'redux-persist/integration/react';

// import store
import store, { persistor } from './redux/store/store';

// import action

//import utils
import { definePolyfills, scrollTop } from './Utils';

// import routes
import Routes from './Routes/';

export function Root() {

    definePolyfills();
    scrollTop();



    return (
        <Provider store={ store } >
            <PersistGate persistor={ persistor } loading={ <span></span> } >
                <BrowserRouter basename={ '/' } >
                    <ScrollContext>
                        <Routes />
                    </ScrollContext>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render( <Root />, document.getElementById( 'root' ) );