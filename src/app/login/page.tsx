import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex h-svh items-center justify-center">
      <LoginForm redirectAfter="/" />
    </div>
  );
};

export default LoginPage;
