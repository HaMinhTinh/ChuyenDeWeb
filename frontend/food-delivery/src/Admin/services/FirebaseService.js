import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Storage } from "../../firebase.config";

class FirebaseService {
  async uploadFile(file) {
    const fileRef = ref(Storage, file?.name);
    const uploadRef = await uploadBytes(fileRef, file);
    return getDownloadURL(uploadRef.ref);
  }
}

export const FBService = new FirebaseService();
