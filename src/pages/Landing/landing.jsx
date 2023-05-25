import './landing.css'
import { Link } from "react-router-dom";

export const Landing = (props) => {
    return(
        <div className='landing'>
            <div className='bgAwal'>
                <div className='header'>
                    <h1 className='read'>Reading Made Easy</h1>
                    <h1>Everywhere Anywhere Anytime</h1>
                </div>
                <Link to={"/Register"} className='start'>Start Now</Link>
                <div className='line'></div>
                <div className='favBook'>
                    <span className='most'>Most Popular</span>
                    <div className='book-container'>   
                    <div className='book'>
                        <img src="book/Perahu-Kertas-cover.webp" className='cover'></img>
                        <span className='judul'>Perahu Kertas</span>
                    </div>
                    <div className='book'>
                        <img src="book/LaskarPelangi.jpg" className='cover'></img>
                        <span className='judul'>Laskar Pelangi</span>
                    </div>
                    <div className='book'>
                        <img src="book/61884838.jpg" className='cover'></img>
                        <span className='judul'>Atalanta</span>
                    </div>
                    <div className='book'>
                        <img src="book/5907.jpg" className='cover'></img>
                        <span className='judul'>The Hobbit</span>
                    </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}