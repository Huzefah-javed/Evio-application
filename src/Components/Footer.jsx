export const Footer =()=>{

    return(
        <div className="bg-[#00274e] py-6 w-full flex flex-col md:flex-row justify-evenly items-center">
            <h1 className="text-white">© 2026 Evio. All rights reserved.</h1>
            <div className="flex items-center gap-6">
                <button className="text-white hover:text-amber-600">Privacy Policy</button>
                <button className="text-white hover:text-amber-600">Terms & Conditions</button>
            </div>
        </div>
    )
}