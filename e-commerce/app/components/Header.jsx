import Link from "next/link";

export default function Header() {
    
    const menulist = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Products",
            link: "/products"
        },
        {
            name: "Cart",
            link: "/cart"
        },
        {
            name: "About",
            link: "/about"
        }, 
        {
            name: "Contact",
            link: "/contact"
        }
    ]
    
    return (
        <nav className="flex items-center justify-between py-4 border-b px-14">
            <img className="h-9" src="logo.png" alt="" />

            <div className="flex items-center gap-4 font-semibold ">
                {menulist?.map((item) => {
                    return (
                        <Link href={item?.link}>
                            <button className="px-2 py-2 rounded-full hover:bg-sky-500 ">{item?.name}</button>
                        </Link>
                    );
                })}
            </div>
            <Link href={"/login"}>
                <button className="px-5 py-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-sky-500">Login</button>
            </Link>
        </nav>

    );
}