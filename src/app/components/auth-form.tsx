import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import AuthLayout from "../providers/auth-layout-provider";
import Logo from "./logo";
import Button from "./ui/button";

interface AuthFormProps {
  type: "signIn" | "signUp"; // Determines if the form is for Sign In or Sign Up
}

interface FormInputs {
  email: string;
  password: string;
  confirmPassword?: string; // Only required for Sign Up
}

// Validation schema using Yup
const signInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const signUpSchema = signInSchema.shape({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const schema = type === "signUp" ? signUpSchema : signInSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    if (type === "signIn") {
      alert("Signing In...");
    } else {
      alert("Signing Up...");
    }
  };

  return (
    <AuthLayout>
      <Logo />
      <div className="w-96 bg-black bg-opacity-70 p-8 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          {type === "signIn" ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 ">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={`w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500 border-red-500" : "focus:ring-red-500"
                }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className={`w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 ${errors.password ? "focus:ring-red-500 border-red-500" : "focus:ring-red-500"
                }`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          {type === "signUp" && (
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className={`w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 ${errors.confirmPassword ? "focus:ring-red-500 border-red-500" : "focus:ring-red-500"
                  }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
          )}
          <Button label={type === "signIn" ? "Sign In" : "Sign Up"} />
        </form>
        <div className="text-gray-400 mt-6 text-center">
          {type === "signIn" ? "New to Netflix?" : "Already have an account?"}{" "}
          <Link href={type === "signIn" ? "/sign-up" : "/sign-in"}>
            <span className="text-white hover:underline">{type === "signIn" ? "Sign up now" : "Sign in"}</span>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AuthForm;
