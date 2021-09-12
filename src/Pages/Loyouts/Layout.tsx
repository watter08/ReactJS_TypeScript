import React , { Fragment  , FunctionComponent} from 'react';

type Children = JSX.Element ;


const Layout: FunctionComponent<Children> = ({    children  }) : JSX.Element => {
    return(
        <Fragment>
        {children}
        </Fragment>
    )
}



export default Layout;