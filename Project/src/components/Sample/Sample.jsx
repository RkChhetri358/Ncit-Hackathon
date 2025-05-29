import React, { useRef, useState ,useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import './Sample.css';
import axios from "axios";
import dummpypic from '../Pictures/dummy.jpg';


 
export default function Sample() {

    const location = useLocation();
  const user = location.state || JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      // redirect to login or show error
    }
  }, [user]);
   const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
const email = localStorage.getItem("email");
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      try {
        const response=await axios.post("http://127.0.0.1:8000/api/addprofilepic/",{
            picture:file,
            username:email,
            first_name:user?.first_name
        },{
                headers: {
    'Content-Type': 'application/json'
  }

        });
        if (response.status === 201) {
       
        alert(`Welcome ${response.data.first_name}`);
      }
    

        
      } catch (error) {
          if (error.response) {
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        alert("No response from server. Please try again later.");
      } else {
        alert(`Error: ${error.message}`);
      }
        
      }
    }


  };

    const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-4">
      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />

      {/* Image (clickable) */}
      <div style={{ marginTop: '20px', cursor: 'pointer' }} onClick={handleImageClick}>
        <img
          src={image || dummpypic} // Dummy image shown initially
          alt="Uploaded Preview"
          style={{
            maxWidth: 100,
            height: 100,
            border: '1px solid #ccc',
            borderRadius: 100,
          }}
          
        />
        <h3> Rachit Khadka</h3>
      </div>
    </div>
  )
}
