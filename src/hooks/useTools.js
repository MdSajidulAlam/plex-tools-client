import { useQuery } from "react-query"

const useTools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/alltools').then(res => res.json()))


    return [tools, isLoading]
}
export default useTools