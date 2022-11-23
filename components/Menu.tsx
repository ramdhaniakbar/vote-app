import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from './Button';

export default function Menu() {
   const router = useRouter();
   return (
      <div className='flex justify-between pt-12 pb-5'>
         <Image
            src={'/assets/votely.svg'}
            width={100}
            height={100}
            alt='Votely'
            onClick={() => router.push('/')}
            className={'cursor-pointer'}
         />
         <Button text='Login' />
      </div>
   );
}
