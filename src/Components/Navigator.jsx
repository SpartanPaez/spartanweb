
import react from 'react';
//react icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navegador = () => {
    return (
        <nav>
            <div className='container mx-auto'>
                <div>
                    <Link>
                        <BiHomeAlt />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navegador;