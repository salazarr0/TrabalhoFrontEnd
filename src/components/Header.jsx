function Header(props) {
    return (
        <header className='p-4 flex place-content-between fixed top-0 left-0 w-full h-24 bg-gray-900'>

            <img className="place-self-center h-16 w-21" src={props.logo} alt="naruto logo" />
            <h1 className='place-self-center text-4xl font-bold text-orange-400'>Shinobi-Dex</h1>
            <div className="place-self-center text-gray-700 text-sm font-bold">
                <button className="border-2  border-gray-700 m-2 p-1 rounded-lg">
                    {props.b1}
                </button>
                <button className="border-2 border-gray-700 my-2 mr-2 p-1 rounded-lg">
                    {props.b2}
                </button>
            </div>
        </header>
    )
}

export default Header