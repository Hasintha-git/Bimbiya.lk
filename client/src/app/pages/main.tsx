import Link from 'next/link';
import { useRouter } from 'next/router'; // Use 'next/router', not 'next/navigation'

import Home from './home/home';
import Foodcity from '../pages/foodcity-section/foodcity';

export default function Main() {
    const router = useRouter();

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/bite-section">Bite</Link>
                    </li>
                    <li>
                        <Link href="/foodcity-section">Foodcity</Link>
                    </li>
                </ul>
            </nav>
            <main>
                {/* Render the corresponding component based on the current route */}
                {router.pathname === '/' && <Home />}
                {router.pathname === '/foodcity-section' && <Foodcity />}
            </main>
        </div>
    );
}
