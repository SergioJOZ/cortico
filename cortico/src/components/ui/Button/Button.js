export default function Button({text, type}){
    return <button type={type} className="bg-green-500 rounded-lg text-white font-bold pr-2 pl-2 hover:bg-green-300">
        {text}
    </button>
}