import  useSate from 'react';
import { AiOutlineHome , AiOutlineLogin , AiOutlineUserAdd, } from 'react-icons/ai';
import {MdOutlineLocalMovies} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useLoginMutation} from "../../redux/api/users";
import {logout} from '../../redux/features/auth/authSlice';


const Navigation = () => {


    const {userInfo} = useSelector((state) => state.auth);
    const [dropdown, setDropdown] = useSate(false);

    const toggleDropdown = () => {
        setDropdown(!dropdownOpen);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[logoutApiCall] = useLoginMutation();
    return  <div className="fixed bottom-10 left-[30rem] transform translate-x-1/2  trsnslate-y-1/2 z-50 bg-[#0f0f0f] border w-[30%] px-[4rem] mb-[2rem] rounded">
        <section className='flex justify-between items-center'>
            {/* section 1*/}
            <div className="flex justify-center items-center mb-[2rem]    "></div>
        </section>
    </div>

};
export default Navigation;
