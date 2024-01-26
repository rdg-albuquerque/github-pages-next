import Link from "next/link"
import { useRouter } from "next/router"


export default function Post() {
    const router = useRouter()
    console.log({router})
    return (
        <div>
            <p>Post: {router.query.id}</p>
            <Link className="text-2xl" href='/'>Home</Link>
        </div>
    )
}