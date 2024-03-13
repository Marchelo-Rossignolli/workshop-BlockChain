export default function Button(props){
    return(
        <button className="text-xl mt-4 p-2 bg-blue-500 w-1/2"
            type={props.type}
            >
            {props.name}

        </button>
    )
}