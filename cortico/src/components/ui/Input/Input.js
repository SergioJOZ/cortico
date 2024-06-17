export default function Input({placeholder, value, onChange, type}){
return <input placeholder={placeholder} value={value} onChange={onChange} type={type} className="border-2 rounded-lg w-full h-14 pt-2.5 pr-4 pb-2.5 pl-4"/>
}