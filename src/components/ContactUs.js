
import contact from "../../assets/contact.png"
import mainImg from "../../assets/food3.jpg"

const ContactUs = ()=>{
    return (
        <div className="flex items-center justify-center">

            <div className='w-[10%]'>
                <img src={mainImg} alt="" className='h-[77vh] w-full object-cover object-left  ' />
            </div>

            <div className="w-[40%]">
                <div className="w-[80%] h-[75vh] bg-gray-100 m-auto rounded-lg">
                    <div className="text-center font-font5 text-2xl py-2 border-b border-[#373267] text-[#373267]">Contact Us</div>

                    <form action="#" className="flex flex-col">

                        <div className="mt-5 relative w-[75%] mx-auto">
                            <label htmlFor="name" className="absolute text-sm bg-transparent top-2 -left-4 text-white py-1 px-2 rounded !bg-[#CB2C2C] ">Name </label>
                            <input type="text" id="name" defaultValue="Akshay" className="p-2 border-2 border-[#CB2C2C] rounded-lg w-full outline-none bg-gray-100 pl-10 font-semibold text-[#373267]" />
                        </div>

                        <div className="mt-5 relative w-[75%] mx-auto">
                            <label htmlFor="email" className="absolute text-sm bg-transparent top-2 -left-4 !bg-[#CB2C2C] text-white py-1 px-2 rounded">Email </label>
                            <input type="email" id="email" defaultValue="akshay@gmail.com" className="p-2 border-2 border-[#CB2C2C] rounded-lg w-full outline-none bg-gray-100 pl-9 font-semibold text-[#373267]" />
                        </div>

                        <div className="mt-5 relative w-[75%] mx-auto">
                            <label htmlFor="phone" className="absolute text-sm bg-transparent top-2 -left-4 !bg-[#CB2C2C] text-white py-1 px-2 rounded">Phone </label>
                            <input type="tel" id="phone" maxLength="10" defaultValue="9999999999" className="p-2 border-2 border-[#CB2C2C] rounded-lg w-full outline-none bg-gray-100 pl-10 font-semibold text-[#373267]" />
                        </div>

                        <div className="mt-5 relative w-[75%] mx-auto">
                            <label htmlFor="msg" className="absolute text-sm bg-transparent top-2 -left-4 !bg-[#CB2C2C] text-white py-1 px-2 rounded">Message </label>
                            <textarea name="msg" id=""  rows="6" defaultValue="I ordered biryani but received puloa" className="p-2 border-2 border-[#CB2C2C] rounded-lg w-full outline-none bg-gray-100 pl-10 pt-10 font-semibold text-[#373267]"></textarea>
                        </div>

                        <input type="submit" value="submit" className="bg-[#CB2C2C] w-[75%] mx-auto py-2 text-white font-font5 text-xl rounded-lg mt-4 hover:shadow hover:shadow-red-400 cursor-pointer"/>
                        
                    </form>


                </div>



            </div>

            <div className='w-[50%]'>
                <img src={mainImg} alt="" className='h-[77vh] w-full object-cover object-center' />
            </div>
            


            {/* <h1 className="text-4xl font-font2 text-[#CB2C2C] text-center m-5" >Contact Us</h1>

            <div className="flex m-2 ">

                <div className="w-5/12 flex justify-center items-center">
                    <img src={contact} alt="" className="h-[30rem]"/>
                </div>

                <div className="w-7/12 border-4 border-r-0 border-[#CB2C2C] px-10 py-5 rounded-l-2xl flex items-center justify-center bg-gradient-to-r from-[#fda6a6] to-[# ca8aff]">
                    <form className="w-[60%] flex flex-col">
                        <div className="flex flex-col  ">
                            <label htmlFor="name" className="font-font5 text-2xl mx-5 text-[#CB2C2C]">Name </label>
                            <input type="text" id="name" className="border-2 border-[#CB2C2C] p-2 rounded-lg" />
                        </div>

                        <div className="flex flex-col  ">
                            <label htmlFor="email" className="font-font5 text-2xl mx-5 text-[#CB2C2C]">Email</label>
                            <input type="email" id="email" className="border-2 border-[#CB2C2C] p-2 rounded-lg"/>
                        </div>

                        <div className="flex flex-col  " >
                            <label htmlFor="number" className="font-font5 text-2xl mx-5 text-[#CB2C2C]">Phone Number</label>
                            <input type="number" id="number" className="border-2 border-[#CB2C2C] p-2 rounded-lg" />
                        </div>

                        <div className="flex flex-col  ">
                            <label htmlFor="msg" className="font-font5 text-2xl mx-5 text-[#CB2C2C]">Message</label>
                            <textarea id="msg" rows={"4"} className="border-2 border-[#CB2C2C] p-2 rounded-lg" > </textarea>
                        </div>

                        <input type="submit" formAction="#" className="px-4 py-2 bg-[#CB2C2C] rounded-lg font-font5 text-xl text-white mt-3 cursor-pointer" />


                    </form>
                </div>
            </div> */}


        </div>
    )
}

export default ContactUs;