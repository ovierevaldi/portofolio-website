import toast from "react-hot-toast";

const CustomToast = (message: string, Icon: React.ReactNode) => {
    toast.custom(() => (
        <div className="flex items-center gap-x-2 border p-4 rounded-lg shadow-sm">
            {Icon}
            <p>{message}</p>
        </div>
    ));
}
export default CustomToast;