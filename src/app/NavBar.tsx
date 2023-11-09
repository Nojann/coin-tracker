export default function NavBar(){
    
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="/">Pépite</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li>
                    <details>
                    <summary>
                        Crypto
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><a href="coin">Ethereum</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    )
}