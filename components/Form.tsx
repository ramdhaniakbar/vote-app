interface Props {
   onChange: (value: string) => void;
   value: string;
   placeholder: string;
   className?: string;
   type?: string;
}

export default function Form(props: Props) {
   return (
      <input
         type={props.type ? props.type : 'text'}
         className={`rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-300 bg-zinc-100 py-2 px-3 ${props.className}`}
         placeholder={props.placeholder}
         onChange={(e) => props.onChange(e.target.value)}
         value={props.value}
      />
   );
}
