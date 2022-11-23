interface Props {
   text: string;
   type?: 'primary' | 'secondary';
   className?: string;
}

export default function Button(props: Props) {
   return (
      <button
         className={`rounded-md px-3 py-2 ${
            props.type === 'secondary'
               ? 'bg-white border-2 border-black text-black hover:bg-zinc-100'
               : ' bg-black border-2 border-black text-white hover:bg-zinc-800'
         }
            ${props.className}
         `}
      >
         {props.text}
      </button>
   );
}
