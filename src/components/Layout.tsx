import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 md:px-10 py-3">
          <Link to="/" className="flex items-center gap-4">
            <div className="relative w-4 h-4">
              <svg
                className="w-4 h-4 fill-foreground absolute"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.6087 8.1912C3.57343 7.96087 4.74147 7.8261 6 7.8261C7.25853 7.8261 8.42657 7.96087 9.3913 8.1912C10.3048 8.40927 11.3322 8.9223 11.7854 9.2784L6.28287 0.45363C6.15237 0.244343 5.84763 0.244343 5.71713 0.45363L0.21458 9.2784C0.66777 8.9223 1.6952 8.40927 2.6087 8.1912Z"
                />
              </svg>
              <svg
                className="w-4 h-4 fill-foreground absolute"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3327 10.9213C12.3315 10.9154 12.3292 10.9052 12.3249 10.8902C12.3145 10.8534 12.2983 10.8086 12.2782 10.7608C12.2723 10.7468 12.2663 10.7331 12.2604 10.7201C11.8368 10.4296 10.9929 10.0202 10.2365 9.83963C9.32917 9.62303 8.21377 9.49277 7 9.49277C5.78623 9.49277 4.67083 9.62303 3.7635 9.83963C3.0004 10.0218 2.14835 10.4368 1.72846 10.7277C1.72461 10.7358 1.72072 10.7443 1.71684 10.7531C1.69973 10.7917 1.68574 10.8295 1.67659 10.863C1.66785 10.8949 1.6668 10.9111 1.66668 10.9129C1.66667 10.9131 1.66668 10.913 1.66668 10.9129C1.66668 10.9214 1.67013 11.0256 1.89495 11.2105C2.11515 11.3915 2.47407 11.5844 2.97637 11.7591C3.97473 12.1063 5.3973 12.3333 7 12.3333C8.6027 12.3333 10.0253 12.1063 11.0236 11.7591C11.5259 11.5844 11.8848 11.3915 12.105 11.2105C12.3002 11.05 12.3286 10.9504 12.3327 10.9213ZM0.650593 9.92293L6.15143 1.10089C6.54293 0.473033 7.45707 0.47303 7.84857 1.10089L13.3511 9.92567C13.357 9.93507 13.3626 9.9446 13.368 9.9543L12.7854 10.2784C13.368 9.9543 13.3679 9.9542 13.368 9.9543L13.3684 9.955L13.3688 9.95583L13.37 9.95797L13.3733 9.96393C13.3759 9.96867 13.3792 9.97487 13.3832 9.98243C13.3913 9.9975 13.4021 10.0182 13.4147 10.0433C13.4397 10.0931 13.4732 10.163 13.5072 10.2439C13.5634 10.3774 13.6667 10.6437 13.6667 10.913C13.6667 11.4809 13.3343 11.9258 12.9519 12.2403C12.5649 12.5586 12.0451 12.8155 11.4617 13.0184C10.2885 13.4265 8.711 13.6667 7 13.6667C5.289 13.6667 3.71153 13.4265 2.53833 13.0184C1.95488 12.8155 1.4351 12.5586 1.04806 12.2403C0.66565 11.9258 0.33333 11.4809 0.33333 10.913C0.33333 10.6242 0.43088 10.3641 0.497737 10.2131C0.534583 10.1299 0.57116 10.0601 0.598957 10.0104C0.612993 9.9852 0.625157 9.9645 0.6345 9.94903C0.63918 9.94127 0.64318 9.93477 0.646387 9.92963L0.648873 9.92567L0.650593 9.92293ZM10.9956 8.668L7 2.25999L3.00437 8.668C3.15537 8.6203 3.30597 8.57807 3.4539 8.54273C4.47603 8.2987 5.6967 8.15943 7 8.15943C8.3033 8.15943 9.52397 8.2987 10.5461 8.54273C10.694 8.57807 10.8446 8.6203 10.9956 8.668Z"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">
              Ethara AI
            </span>
          </Link>

          <nav className="flex items-center gap-4 md:gap-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-9">
              <Link
                to="/"
                className={`text-sm ${
                  isActive("/")
                    ? "text-foreground font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/solutions"
                className={`text-sm ${
                  isActive("/solutions")
                    ? "text-foreground font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Solutions
              </Link>
              <Link
                to="/services"
                className={`text-sm ${
                  isActive("/services")
                    ? "text-foreground font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Services
              </Link>
            </div>


            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Contact Button - Hidden on mobile when menu is open */}
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors ${
                isMobileMenuOpen ? "hidden md:block" : ""
              }`}
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="px-6 py-4 space-y-3">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block py-2 text-sm ${
                  isActive("/")
                    ? "text-foreground font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/solutions"
                onClick={closeMobileMenu}
                className={`block py-2 text-sm ${
                  isActive("/solutions")
                    ? "text-foreground font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Solutions
              </Link>
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className={`block py-2 text-sm ${
                  isActive("/services")
                    ? "text-foreground font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block w-full mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors text-center"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          
        )}
        
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 mb-6">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-foreground text-center min-w-[160px]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-foreground text-center min-w-[160px]"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-foreground text-center min-w-[160px]"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                className="w-6 h-6"
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.1928 3.46313C20.0768 3.18285 19.8033 3.00006 19.5 3H16.6472C15.8359 1.61972 14.3604 0.765791 12.7594 0.75C11.5747 0.734462 10.4339 1.19754 9.59531 2.03438C8.73219 2.88138 8.24717 4.04071 8.25 5.25V5.82094C4.47563 4.82531 1.38844 1.755 1.35563 1.72219C1.15019 1.51493 0.843182 1.44566 0.568648 1.54461C0.294115 1.64356 0.101905 1.89277 0.0759375 2.18344C-0.328125 6.66375 0.973125 9.66187 2.13844 11.3878C2.70664 12.241 3.39786 13.0055 4.18969 13.6566C2.76188 15.3 0.51375 16.1634 0.489375 16.1728C0.274975 16.2531 0.108995 16.4269 0.0386822 16.6448C-0.031631 16.8627 0.00142384 17.1008 0.128438 17.2913C0.19875 17.3962 0.48 17.7647 1.16719 18.1087C2.01656 18.5344 3.13875 18.75 4.5 18.75C11.1253 18.75 16.6612 13.6481 17.2266 7.08375L20.0306 4.28062C20.2451 4.06601 20.3091 3.74335 20.1928 3.46313Z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                className="w-6 h-6"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.25 0.25H1.75C0.921573 0.25 0.25 0.921573 0.25 1.75V18.25C0.25 19.0784 0.921573 19.75 1.75 19.75H18.25C19.0784 19.75 19.75 19.0784 19.75 18.25V1.75C19.75 0.921573 19.0784 0.25 18.25 0.25ZM18.25 18.25H1.75V1.75H18.25V18.25ZM7 8.5V14.5C7 14.9142 6.66421 15.25 6.25 15.25C5.83579 15.25 5.5 14.9142 5.5 14.5V8.5C5.5 8.08579 5.83579 7.75 6.25 7.75C6.66421 7.75 7 8.08579 7 8.5ZM15.25 11.125V14.5C15.25 14.9142 14.9142 15.25 14.5 15.25C14.0858 15.25 13.75 14.9142 13.75 14.5V11.125C13.75 10.0895 12.9105 9.25 11.875 9.25C10.8395 9.25 10 10.0895 10 11.125V14.5C10 14.9142 9.66421 15.25 9.25 15.25C8.83579 15.25 8.5 14.9142 8.5 14.5V8.5C8.50193 8.11975 8.78811 7.80112 9.16598 7.75852C9.54384 7.71592 9.89378 7.96285 9.98031 8.33313C11.0142 7.63174 12.351 7.55891 13.455 8.14381C14.559 8.7287 15.2496 9.87563 15.25 11.125ZM7.375 5.875C7.375 6.49632 6.87132 7 6.25 7C5.62868 7 5.125 6.49632 5.125 5.875C5.125 5.25368 5.62868 4.75 6.25 4.75C6.87132 4.75 7.375 5.25368 7.375 5.875Z"
                />
              </svg>
            </a>
          </div>

          <div className="text-center text-muted-foreground">
            © 2025 Ethara AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
