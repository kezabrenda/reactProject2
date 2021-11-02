function Buttons({ text, onClick }) {

    return <button onClick={onClick} className="border bg-green-500 md:w-24 w-16 text-xl text-white">{ text }</button>
}

export default Buttons
