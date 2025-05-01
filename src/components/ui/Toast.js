import { Slide } from "react-toastify";
import { toast } from "react-toastify";

export const useToast = () => {
  const defaultOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Slide,
  };

  const notify = {
    success: (message) => toast.success(message, defaultOptions),

    warn: (message) => toast.warn(message, defaultOptions),

    error: (message) => toast.error(message, defaultOptions),

    info: (message) => toast.info(message, defaultOptions),
  };

  return { notify };
};
