import Link from "next/link";
export default function Header() {
    return(
        <>
     <Link href = "/">Home</Link>
     <Link href ="/About">About</Link>
     <Link href = "/About/Branches">Branches</Link>
     <Link href ="/About/Products">Products</Link>
     <Link href ="/About/Whoweare">Whoweare</Link>
     <Link href ="/Contact">Contact</Link>
     <Link href ="/Blog">Blog</Link>
     

        </>
    )
}