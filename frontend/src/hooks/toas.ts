import toast from "react-hot-toast";
type Toaster = (message: string) => void;

export const handleSuccess: Toaster = (message) => {
  toast.success(message);
};

export const handleError: Toaster = (message) => {
  toast.error(message);
};
