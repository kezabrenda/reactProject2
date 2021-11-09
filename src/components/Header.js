import Buttons from "./Buttons"

const Header = ({ onAdd, showAdd }) => {

    return (
        <header className="grid md:grid-cols-2 grid-cols-2 text-3xl font-black m-4 flex space-x-24">
            <h1 className="md:ml-4">Itinerary tracker</h1>
            <Buttons text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header
