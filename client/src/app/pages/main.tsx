import Link from 'next/link';

import PostLogin from './post-login/post-login';
import Login from './pre-login/login';
import Register from './pre-login/register';

export default function Main() {

    return (
        <div>
            {/* <PostLogin/> */}
            {/* <Login/> */}
            <Register/>
        </div>
    );
}
