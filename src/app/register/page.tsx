import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex h-svh items-center justify-center">
      <RegisterForm redirectAfter="/login" />
    </div>
  );
};

export default RegisterPage;
