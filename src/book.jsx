import { Link } from 'react-router-dom';
import book from './books.js';

export default function Books() {
  
  return (
    <>
      <div className='m-4'>
        <p className="text-3xl">{`List of my favourite books`}</p>
      </div>

      <div className='m-4'> 
        {
          book && book.map((book)=> (
            <>
            <ul>
              <li>
                <Link to={`newbooks/${book.id}`} className='text-blue-600 underline'>{book.title}</Link>
              </li>
            </ul>
          </>
          )) 
        }
      </div>
    </>
  )
}   