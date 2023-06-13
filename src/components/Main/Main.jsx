import './Main.css';
import Slider from 'react-slick';

export function Main() {
    {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    }
    return (
        <div className='Main'>
            <h2>Добро пожаловать на ваше веб-приложение с тестами на любой вкус!</h2>
            <Slider className='slider' {...settings}>
                <img src='https://www.meme-arsenal.com/memes/14b1276b31aa79b456ef8dab89561d82.jpg'/>
                <img src='https://sun9-6.userapi.com/impf/c636025/v636025781/352e5/8ML88733dw4.jpg?size=0x160&crop=0.039,0.039,0.922,0.922&quality=95&sign=fdb71ed3e61223895c393d5ca47b901c'/>
                <img src='https://vsememy.ru/wp-content/uploads/2022/10/102ced258fb8fa703deeb6cb148a8095.jpg'/>
                <img src='https://www.meme-arsenal.com/memes/e867216758d715509bcb3c18a0d306a0.jpg'/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L_4c0JF_NJMoX2C-CPwEkqnppocOG-lA7tb8CntmL8JlhYkwvLi7q5_B_WfWGrPhASk&usqp=CAU'/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvKSfDWzGmWm1Fpd4VlCePVtOm5O8pUFW7mY8aId91MxTaCywz3-kT9HtsB9FaVwKxQU&usqp=CAU'/>
            </Slider>
        </div>
    );
}