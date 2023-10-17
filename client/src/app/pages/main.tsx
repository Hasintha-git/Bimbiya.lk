import Link from 'next/link';

import Home from './home/home';
import Foodcity from '../pages/foodcity-section/foodcity';
import Bite from '../pages/bite-section/bite';
import CardDetails from '../components/cardDetails';
import Checkout from '../components/checkout';

export default function Main() {

    return (
        <div>
            {/* <Home/> */}
            {/* <Bite/> */}
            {/* <Foodcity/> */}
            {/* <CardDetails/> */}
            <Checkout/>
        </div>
    );
}
