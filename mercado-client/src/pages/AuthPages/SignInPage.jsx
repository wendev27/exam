import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-pink-900 outline-none transition placeholder:text-pink-600 focus:border-pink-300 focus:bg-pink-50';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-pink-50 sm:text-4xl">
        Log In
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-300">
        Access your store account to review orders, saved items, and pickup
        details.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="signin-email"
            className="text-sm font-medium text-zinc-200"
          >
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="hello@glowritual.shop"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signin-password"
            className="text-sm font-medium text-zinc-200"
          >
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-400">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-200">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 accent-pink-400"
            />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="font-medium text-pink-200 transition hover:text-pink-100"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Log In with Google
          </Button>
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-800 pt-6 text-sm text-zinc-300">
        No account yet?{' '}
        <Link
          to="/auth/signup"
          className="font-semibold text-pink-200 transition hover:text-pink-100"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
