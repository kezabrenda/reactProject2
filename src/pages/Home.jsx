import Typical from 'react-typical'

const Home = () => {
    return (
        <div className = "text-red-900 text-center text-5xl mt-56">
            <Typical
                steps={[
                     'UIT',
                  2000,
                  'Ur Itinerary Tracker',
                  3000,
                ]}
                wrapper="p"
                loop={Infinity}
            />
            <h1 className="text-black mt-12 mb-24 text-4xl">There is no forgetting in UIT</h1>
        </div>
    )
}

export default Home
