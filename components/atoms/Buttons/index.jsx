import clsx from 'clsx';

const Button = ({ text, variant = 'fill', className, Icon, ...props }) => {
    return (
        <button
            type="button"
            className={clsx(
                'flex items-center justify-center w-44 text-white text-xl py-2 capitalize duration-300 rounded-lg',
                className,
                {
                    'bg-black': variant === 'fill',
                    'bg-transparent hover:bg-primary border border-primary':
                        variant === 'transparent',
                    'bg-gradient-to-br from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600':
                        variant === 'gradient',
                }
            )}
            {...props}
        >
            {Icon && <Icon className="h-4 w-4 mr-1" />}
            {text}
        </button>
    );
};

export default Button;
