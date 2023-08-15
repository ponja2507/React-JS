export const Input = ({ label, placeholder, onChange, ...props }) => {
    return (
        <div>
            <span>{label}</span>
            <input
                placeholder={placeholder || label}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};