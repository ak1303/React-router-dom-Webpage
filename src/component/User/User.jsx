import { useParams } from "react-router-dom";



const User = () =>{
    const {userid} = useParams();
    return (
        <>
            <div>User-Id:{userid}</div>
        </>
    )
}
export default User;