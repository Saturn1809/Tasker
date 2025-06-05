const Read = (props) => {


const todos = props.todos;
const settodos = props.settodos;


const DeleteHandler =  (id) => {

    const filtertodo =  todos.filter(todo => todo.id != id)
    settodos(filtertodo)
    
}

const rendertodo = todos.map((todo) =>{

  return<li className="p-2 list-disc flex justify-between items-center bg-blue-300 mb-4 rounded-lg" flex justify key={todo.id}>{todo.title} {" "}
   <span className=" font-thin text-red-400 cursor-pointer" onClick={ () => DeleteHandler(todo.id)}>Delete</span></li>

}) 
  return (
    <div className=" overflow-hidden border w-[30%] p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 ">
      <h1 className="text-3xl text-blue-700 font-thin border-b border-blue-300 py-2 sticky top-0 z-10 ">Pending Todos</h1>
      <div className="max-h-screen overflow-y-auto scroll-hide">
 <ol className=" list-disc text-sm py-8 ">{rendertodo}</ol>
      </div>
     
    </div>
  )
}

export default Read

