import {
  Bell,
  CreditCard,
  Home,
  LogOut,
  MessageCircle,
  MoreHorizontal,
  PlusSquare,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import logoSrc from "/header logo.png";

const Navbar = ({ onOpenMessages }) => {
  const { logout, authUser } = useAuthStore();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-20 lg:w-72 bg-base-100 border-r border-base-300 z-40 flex flex-col">
      <div className="p-4 flex items-center justify-center lg:justify-start">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoSrc} alt="Meraki" className="h-8 w-auto" />
          <span className="hidden lg:inline font-bold text-lg">MERAKI</span>
        </Link>
      </div>

      <nav className="flex-1 px-2 lg:px-4 py-4 space-y-1">
        <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-base-200">
          <Home className="w-5 h-5 text-sky-500" />
          <span className="hidden lg:inline">Home</span>
        </Link>

        <Link to="/cart" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-base-200">
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden lg:inline">Cart and Orders</span>
        </Link>

        <Link to="/payments" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-base-200">
          <CreditCard className="w-5 h-5" />
          <span className="hidden lg:inline">My Payments</span>
        </Link>

        <button
          type="button"
          onClick={() => onOpenMessages && onOpenMessages()}
          className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-base-200"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden lg:inline">Messages</span>
        </button>

        <Link to="/notifications" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-base-200">
          <Bell className="w-5 h-5" />
          <span className="hidden lg:inline">Notifications</span>
        </Link>

        <Link to="/create" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-base-200">
          <PlusSquare className="w-5 h-5" />
          <span className="hidden lg:inline">Create</span>
        </Link>

        <Link to="/more" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-base-200">
          <MoreHorizontal className="w-5 h-5" />
          <span className="hidden lg:inline">More</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-base-300">
        {authUser ? (
          <div className="flex items-center gap-3">
            <img src={authUser.profilePic || '/avatar.png'} alt={authUser.fullName} className="w-10 h-10 rounded-full" />
            <div className="hidden lg:block">
              <div className="font-medium">{authUser.fullName}</div>
              <div className="text-xs text-zinc-500">@{authUser.username}</div>
            </div>
            <div className="ml-auto hidden lg:block">
              <button className="btn btn-ghost btn-sm" onClick={logout}>Logout</button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Link to="/login" className="btn btn-primary btn-sm">Sign in</Link>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Navbar;
