import ThemeSwitcher from "../themeSwitcher";

const Header = () => {
  return (
    <header className="shadow bg-main-100 dark:bg-main-900 z-10">
      <div className="max-w-screen-xl flex justify-between items-center px-6 py-4 mx-auto">
        <h1 className="text-xl font-bold">Task Tracker</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
