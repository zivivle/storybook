interface ICGButton {
    iconPath: string;
    iconAlt: string;
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const CGButton = ({ iconPath, iconAlt, text, onClick }: ICGButton) => {
    return (
        <button
            onClick={onClick}
            className={`
                rounded-primary-button
                flex
                items-center
                border
                border-primary
                text-primary
                text-base
                font-bold
                gap-4
                py-[10px]
                pl-[22px]
                pr-[21px]
            `}
        >
            <img src={iconPath} alt={iconAlt} />
            <p>{text}입니다</p>
        </button>
    );
};
