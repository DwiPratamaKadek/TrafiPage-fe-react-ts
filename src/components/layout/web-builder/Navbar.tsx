

type NavbarProps = {
    home?: string,
    about?: string, 
    contact?: string, 
    title?: string
}

export default function Navbar({home, about, contact, title} : NavbarProps){
    return(
        <nav className="flex justify-around px-2 py-3 border rounded-xl">
            <h1>My Website {title}</h1>
            <div className="flex gap-2">
                <a href="">Home{home}</a>
                <a href="">About{about}</a>
                <a href="">Contact{contact}</a>
            </div>
        </nav>
    )

}