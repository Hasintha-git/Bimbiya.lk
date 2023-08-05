import Link from 'next/link';

import Home from './home/home';
import Foodcity from '../pages/foodcity-section/foodcity';
import Bite from '../pages/bite-section/bite';

export default function Main() {

    return (
        <div>
            {/* <Home/> */}
            {/* <Bite/> */}
            <Foodcity/>
        </div>
    );
}
