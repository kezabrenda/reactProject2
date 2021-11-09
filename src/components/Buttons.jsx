function Buttons({ text, onClick, showAdd }) {

    return <button onClick={onClick} 
    className= {`${ showAdd ? 'bg-red-500' : 'bg-green-400' } border md:w-16 w-16 text-lg text-white`}>{ text }</button>
}

export default Buttons
