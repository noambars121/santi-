import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  );
};
