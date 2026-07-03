import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-300 hover:cursor-pointer disabled:bg-primary-300",
  secondary:
    "bg-gray-100 text-primary-500 hover:bg-primary-300/20 disabled:opacity-50",
  destructive:
    "bg-red-500 text-white hover:bg-red-300 disabled:bg-red-300",
  ghost:
    "bg-transparent text-gray-500 gap-0 hover:bg-gray-100 disabled:opacity-50",
};

const sizeStyles = {
  sm: "h-10 px-4 text-body-m",
  md: "h-12 px-6 text-body-l",
  lg: "h-14 px-8 text-heading-m",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      fullWidth = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={twMerge(
          clsx(
            "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors duration-200",            variantStyles[variant],
            sizeStyles[size],
            fullWidth && "w-full",
            (disabled || loading) && "cursor-not-allowed",
            className
          )
        )}
        {...props}
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Loading...
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";