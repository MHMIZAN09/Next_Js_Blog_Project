import Link from "next/link";


const Navbar = () => {
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact",
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard",
        },
    ];

    return (
        <div className="flex items-center justify-between p-4">
            <Link href="/">Lamamia</Link>
            <div className="flex justify-around gap-4 items-center">
                {
                    links.map((link) => (
                        <Link href={link.url} key={link.id}>
                            {link.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar
