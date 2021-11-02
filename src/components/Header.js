import Buttons from "./Buttons"

const Header = () => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className="grid md:grid-cols-2 grid-cols-2 text-5xl font-black m-4 flex space-x-96">
            <h1 className="md:ml-24">Itinerary tracker</h1>
            <Buttons text="Add" onClick={onClick} />
        </header>
    )
}

export default Header
