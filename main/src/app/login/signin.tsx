export default function Signin() {
  return (
    <div>
      <img
        alt="Portfolio"
        src="/Portfolio.svg"
        className="h-10 w-auto"
      />
      <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-foreground">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm leading-6 text-foreground">
        Not a member?{" "}
        <a
          href="#"
          className="font-semibold text-foreground hover:text-primary"
        >
          Register
        </a>
      </p>
    </div>
  );
}
