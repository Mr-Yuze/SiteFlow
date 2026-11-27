import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerschema } from "../component/RegisterSchema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
function Register() {
    const navigate =useNavigate();
    const{register,handleSubmit,formState:{errors}} = useForm({
          resolver: zodResolver(registerschema)
    })
     function onsubmit(data){
        console.log(data)
        alert("registeration successful")
        navigate("/login",{
            state:data
        })
     }
     function move(){
        navigate("login")
     }
    return ( 
      <>
      <form onSubmit={handleSubmit(onsubmit)}>
      <input type="text" placeholder="Enter ur id" {...register("id")} />
      <p>{errors.name?.message}</p>
      <input type="text" placeholder="Enter ur email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="text" placeholder="Enter ur password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type="text" placeholder="Enter ur age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="text" placeholder="Enter ur roll" {...register("rollno")}/>
      <p>{errors.rollno?.message}</p>
      <button type="submit">Submit</button>
      <p>Already Registered try </p>
      <button onClick={move}>LOGIN</button>
      </form>
      </>  
     );
}

export default Register;