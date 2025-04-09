import Link from "next/link";

function NotFound() {
    return (
        <div>
            <div>Not Found</div>
            <Link href={"/"}>Back to Home</Link>
        </div>
    );
}

export default NotFound;
