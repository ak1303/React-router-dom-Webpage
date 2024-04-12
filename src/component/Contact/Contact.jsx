


const Contact = () =>{
    return (
    <>
    <div className="container flex justify-center items-center gap-10 my-20">
        <div className="w-1/4">
            <div className="table bg-gray-300 w-full rounded-lg p-5">
                <h1 className="font-bold text-2xl m-2">Get in Touch:</h1>
                <p className="text-lg m-2" >Fill in the form to start a conversation</p>
                <table >
                    <tbody>
                        <tr> 
                            <td> <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pin-location.png" alt="Img" /> </td>
                            <td> <div className="address tracking-wide p-4">Acme Inc, Street, <span className="block">State, Postal Code</span> </div> </td>
                        </tr>
                        <tr> 
                        <td> <img className="w-6" src="/pngegg.png" alt="Img" /> </td>
                            <td> <div className="address tracking-wide p-4">+44 1234567890</div> </td>
                        </tr>
                        <tr> 
                        <td> <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Email_icon.svg/1200px-Email_icon.svg.png" alt="Img" /> </td>
                            <td> <div className="address tracking-wide p-4">info@acme.org</div> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <form className="flex flex-col w-1/4 flex-1/2" action="">
            <input className="p-2 rounded-lg border m-2 outline-slate-400" type="text" placeholder="Full Name"/>
            <input className="p-2 rounded-lg border m-2 outline-slate-400" type="email" placeholder="Email"/>
            <input className="p-2 rounded-lg border m-2 outline-slate-400" type="tel" placeholder="Telephone number"/>
            <button className="bg-orange-700 px-3 py-2 hover:bg-orange-600 text-white rounded-lg w-1/4 m-2">Submit</button>
        </form>
    </div>
    </>
    )
}
export default Contact;