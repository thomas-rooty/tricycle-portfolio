import Image from 'next/image';
import Navbar from '../../components/navbar/navbar';

const About = () => {
    return (
        <div>
            <Navbar/>
            <h1>About</h1>
            <p>
                This is a simple next.js project.
            </p>
            <Image src="/vercel.svg" width={256} height={256} alt="About"/>
        </div>
    )
}

export default About