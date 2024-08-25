import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import toast from "react-hot-toast";
type Toaster = (message: string) => void;
type TError = (error: FetchBaseQueryError | SerializedError) =>void
export const handleSuccess: Toaster = (message) => {
  toast.success(message);
};

export const handleError: TError = (error) => {
  if (error) {
    if ('data' in error) {
      const errorMessage = (error.data as { message: string }).message;
      toast.error(errorMessage)
    }
  }
};
