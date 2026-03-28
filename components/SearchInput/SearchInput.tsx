
interface SearchInputProps{
onSearch: (value:string)=> void
}
export default function SearchInput({ onSearch}: SearchInputProps) {
    
    return (
        <input
            type="text"
            placeholder="Search by model"
            onChange={(event)=> onSearch(event.target.value)} />

    )
}