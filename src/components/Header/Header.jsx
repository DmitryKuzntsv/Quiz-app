import './Header.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TollIcon from '@mui/icons-material/Toll';

export function Header( ) {
   
    return (
        <div className='header'>
            <a href='#default' className='logo'>SmarTest</a>
                <a  href='/test'>Тесты</a>
                <a href='/stats'>Статистика</a>
                <a href='/register' >Регистрация</a>
                <div className='header-right'>

                <AccountBoxIcon/><span className='name'>Дементий К.</span><br/>
                <TollIcon/><span className='points'> 1000 очков</span>
            </div>
        </div>
    );
}