// import img from './desktop.jpeg'


const Home = ()=>{
    return(
        <>
            <div className="grid grid-cols-2 gap-2 justify-items-center items-center">
                <img className="bg-orange w-80 p-5" src="/boy.png" alt="" />
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold">Download Now</h1>
                    <h2 className="text-xl">Lorem Ipsem</h2>
                    <button className=" flex gap-1 items-center bg-orange-600 px-5 py-3 hover:bg-orange-500 text-white rounded-lg">
                        <img className="w-8" src="/play.png" alt="img" />
                        Download Now
                    </button>
                </div>
            </div>
        </>
    )
}
export default Home;