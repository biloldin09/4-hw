import { useDispatch } from "react-redux";
import { incrementNum, decrementNum, resetNum } from "./redux/reducer";

const Button = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={() => {
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={() => {
                dispatch(resetNum())
            }}>0</button>
        </div>
    )
}

export default Button;