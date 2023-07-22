import disposed from '../images/shirt.jpg'
import disposed2 from '../images/bird.jpg'

import { Link } from 'react-router-dom'




export const SOCIALS = [
    {
        id: 0,
        name: 'insta',
        disc: 'the gram',
        price: '$12',
        image: disposed,
        image2: disposed2,
        website: <a className='noDecoration' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            </a>,
        icon: <i className='fa fa-instagram' />
    },
    {
        id: 1,
        name: 'facebook',
        disc: 'september',
        price: '$20',
        image: disposed,
        image2: disposed2,
        website: <a className='noDecoration' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            </a>,
        icon: <i className='fa fa-facebook' />


    },
    {
        id: 2,
        name: 'youtube',
        disc: 'the gram',
        price: '$12',
        image: disposed,
        image2: disposed2,
        website: <a className='noDecoration' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            </a>,
        icon: <i className='fa fa-youtube' />
    },
    {
        id: 3,
        name: 'spotify',
        disc: 'september',
        price: '$20',
        image: disposed,
        image2: disposed2,
        website: <a className='noDecoration' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            </a>,
        icon: <i className='fa fa-spotify' />


    }

];