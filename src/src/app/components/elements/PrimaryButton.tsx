import { MouseEventHandler } from "react"

type Props = {
    handleClick: MouseEventHandler<HTMLButtonElement>
    label: string
}
export const PrimaryButton = ({handleClick, label} : Props) => {
    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

// const handleClick = () => {
//     console.log("primaryButton clicked")
// }