export interface UploadModalProps {
   isOpen: boolean;
   onClose: () => void;
   onUpload: (file: File) => void;
 }