import { db } from "./shared/firebase"
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRef } from "react";

function App() {
  const file_link_ref = useRef(null);
  const storage = getStorage();
  ref(storage, 'images');

  const uploadFB = async (e) => {
    const uploded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`), e.target.files[0]
    );

    const file_url = await getDownloadURL(uploded_file.ref);
    file_link_ref.current = {
      url: file_url
    }
    
    addDoc(collection(db, "users"), {
      image_url: file_link_ref.current.url
    });

  }

  return (
    <div className="App">
      이미지 올리기: 
      <input type="file" onChange={uploadFB}/>
    </div>
  );
}

export default App;
