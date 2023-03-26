import Hover from "./Hover"
import LocalStorage from "./LocalStorage"
import Posts from "./Posts"
import ViewportSize from "./ViewportSize"
import WindowScroll from "./WindowScroll"

const Components = () => {
    return (
        <>
            <Posts />
            <LocalStorage />
            <Hover />
            <ViewportSize />
            <WindowScroll />
        </>
    )
}

export default Components