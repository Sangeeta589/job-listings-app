import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <Link href="/" className="text-white mr-4">Home</Link>
            <Link href="/jobs" className="text-white">Jobs</Link>
        </nav>
    );
};

export default Navbar;