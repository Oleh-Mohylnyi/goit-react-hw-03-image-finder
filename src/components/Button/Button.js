import './button.css'

export default function Button({ clickBtn }) {
    return(
        <button
            type="button"
            className="Button"
            onClick={clickBtn}>
        Load more
        </button>
    )
}