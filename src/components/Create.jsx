import { nanoid } from 'nanoid';
import {useForm} from "react-hook-form";
import { toast } from 'react-toastify';

const Create = (props) => {

const todos = props.todos;
const settodos = props.settodos;

    

const {

  register,
  handleSubmit , 
  reset, 
  formState:{errors}} = useForm();

const Submiithandler = (data) =>{


 data.isCompleted=false;
 data.id = nanoid();

 const copytodos = [...todos];
 copytodos.push(data);
 settodos(copytodos);

 toast.success('Task Created')
 reset();
};


  return (
    <div className='border w-[70%] p-10   rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
       <h1 className='text-5xl font-thin mb-14'>Set <span className='text-blue-700'> Reminders</span> for Tasks</h1>
      <form onSubmit={handleSubmit(Submiithandler)} >
        <input
            {...register("title",{required:"Title can not be empty"})}
             className='border-blue-300 border-b focus:outline-none  py-2 w-full text-xl font-thin'  type="text" placeholder='Title' />
             {errors  && errors.title && errors.title.message && <small>{errors.title.message}</small> }
             <br /><br />
        <button className='cursor-pointer text-blue-400  text-md border-1 p-2 tracking-tight rounded-xl border-blue-300 active:scale-95 transition hover:bg-blue-100'>Create Task</button>
      </form>
    </div>
  )
}

export default Create
