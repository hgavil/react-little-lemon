import '../styles/styles.css'

export function Footer() {
    return (
        <footer>
            <>

                <ul>
                    Doormat Navigation
                    <li><a href={'/home'}>Home</a></li>
                    <li><a href={'/about'}>About</a></li>
                    <li><a href={'/menu'}>Menu</a></li>
                    <li><a href={'/reservations'}>Reservations</a></li>
                    <li><a href={'/order-online'}>Order Online</a></li>
                    <li><a href={'/login'}>Login</a></li>
                </ul>
            </>
            <>
                <ul>
                    Contact
                    <li><a href={'/'}>Address</a></li>
                    <li><a href={'/'}>Phone Number</a></li>
                    <li><a href={'/'}>Email</a></li>
                </ul>
            </>
            <>
                <ul>
                    Social Media Links
                    <li><a href={'/'}>Address</a></li>
                    <li><a href={'/'}>Phone Number</a></li>
                    <li><a href={'/'}>Email</a></li>
                </ul>
            </>
        </footer>
    )
}