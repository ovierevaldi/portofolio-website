import { FaClipboard } from "react-icons/fa";
import CustomToast from "../components/CustomToast";

const copyClipboardToast = () => CustomToast('Copied To Clipboard', <FaClipboard />);

export default copyClipboardToast;