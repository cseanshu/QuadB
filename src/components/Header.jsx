import Todo from "./Todo"

const Header=()=>{
    return (
        <div className="flex justify-between  bg-slate-300 shadow-xl">
        <div className="flex">
        <img src="./logo.jpeg" alt="logo" className="w-20 h-16 logo -mt-1 " />
        <p className="text-4xl font-bold mt-3 lg:ml-4  ">Sangrahalaye✨</p>
        </div>
       <div className="mt-3">
       </div>
        </div>
    )
}
export default Header