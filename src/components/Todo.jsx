import { useState } from "react"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { createTodo } from "../Redux/action"
import { useNavigate } from "react-router"

const Todo=()=>{
  const [title, setTitle] = useState('');
  const [secret, setSecret] = useState('');
  const dispatch = useDispatch();
 const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Secret:", secret);
    dispatch(createTodo(title, secret));
    setTitle('');
    setSecret('');
  };
  return (
    <div className="flex flex-col gap-11">
       <Header/>
       <p className="text-3xl underline -mt-5  shadow-md font-bold text-center">Keep Yours Secret in an Organised way!!!</p>
      <div className="form-center">
      <form className="flex flex-col gap-5 max-w-80 p-5 -mt-5 mx-auto border border-gray-300 rounded-lg shadow-md backdrop-filter backdrop-blur-md " onSubmit={handleSubmit}>
    <input type="text" placeholder="Title" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:border-blue-400" value={title} onChange={(e)=>setTitle(e.target.value)} />
    <textarea type="text" placeholder="Your secrets...." className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:border-blue-400"  value={secret} onChange={(e)=>setSecret(e.target.value)}/>
    <div>
  
  <div> <button className="btn-flip" data-back="Suvichar" data-front="SaveNotes+"></button></div>    {/* save notes button */}
  <div className="wrapper">        {/*  view notes button */}
      <div className="link_wrapper">
        <button className="btn" onClick={()=>navigate('/notestore')}>VIEW NOTES</button>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
            <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
          </svg>
        </div>
      </div>
    </div>


    </div>
</form>
      </div>
    </div>
  )
}
export default Todo