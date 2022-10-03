import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="flex flex-col">
                <Link href="/PresentBoxCSS">
                    <a>presentBox</a>
                </Link>
            </div>
        </div>
    );
}
