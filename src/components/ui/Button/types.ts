export type TButtonProps = {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick: () => void;
    children: JSX.Element | string;
};
