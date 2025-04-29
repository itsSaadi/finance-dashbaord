import { useEffect } from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
}

export function Toast({ message, type = 'success' }: ToastProps) {
  useEffect(() => {
    const options: ToastOptions = {
      position: 'top-right',
      autoClose: 3000,
    };

    if (type === 'success') toast.success(message, options);
    else if (type === 'error') toast.error(message, options);
    else if (type === 'info') toast.info(message, options);
    else toast.warning(message, options);
  }, [message, type]);

  return <ToastContainer />;
}
