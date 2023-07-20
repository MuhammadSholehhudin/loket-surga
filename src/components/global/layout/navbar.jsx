export default function Navbar(){
    return (
        <nav className="py-3">
            <div className="container d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    Logo
                </div>

                <div className="d-flex align-items-center gap-4">
                    <p className="m-0">Dashboard</p>
                    <p className="m-0">Tentang</p>
                    <p className="m-0">Artikel</p>
                    <button className="btn btn-primary ">Kontak Kami</button>
                </div>
            </div>
        </nav>
    )
}