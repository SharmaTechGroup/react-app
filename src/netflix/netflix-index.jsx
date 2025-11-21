import './netflix-index.css';
import { NetflixHeader } from './netflix-header';
import { NetflixSection } from './netflix-section';

export function NetflixIndex(){
     return(
        <div className='bg-image'>
            <div className='bg-shade'>
                <NetflixHeader />
                <NetflixSection />
            </div>
        </div>
     )
}