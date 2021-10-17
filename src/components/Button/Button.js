import './button.css'

export default function Button({ onClickBtn }) {
    return(
        <button
            type="button"
            className="Button"
            onClick={onClickBtn}>
        Load more
        </button>
    )
}