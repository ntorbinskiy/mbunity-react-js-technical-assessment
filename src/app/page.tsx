import { JSX } from "react";
import Link from "next/link";

export default function Home(): JSX.Element {
    return (
        <div className="text-center h-75 flex flex-col justify-center items-center">
            <span>This is home page</span>
            <Link href="/contact" className="text-blue-500 hover:text-blue-600">
                Go to contact page
            </Link>
        </div>
    );
}
