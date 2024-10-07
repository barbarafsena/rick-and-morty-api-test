interface ButtonProps {
    text: string;
    onClick: () => void | null;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <div className="mt-10 mb-10">
            <button
                className="w-24 bg-lime-400 p-2"
                onClick={onClick} >
                {text}
            </button>
        </div>
    )
}

export default Button;