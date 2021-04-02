import react, { useState, useEffect } from "react";
import firebase from "firebase";
import { Button } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/editUserDetails.css";
import {Redirect} from "react-router-dom"
import $ from "jquery";






function EditUser() {
    const auth = firebase.auth();
    
    
    let uid = '';
    const [name, setName] = useState("");
    
    const [phoneno, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [email,setEmail]= useState("");
    const [updatestate,setupdateState]= useState(false);
    const [profileImage, setProfileImage] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
    

    useEffect(() => {
        $(document).ready(function () {
          $(this).scrollTop(0);
        });
      }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        if (name == "name") {
            setName(value);
        } else if (name == "phoneno") {
            setPhoneNo(value);
        } else if (name == "address") {
            setAddress(value);
        } 
    }

    function handleProfileImageChange(event) {
        let selectedFile = event.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
          setProfileImage(selectedFile);
        } else {
          setProfileImage(null);
        }
      }
    const fetchUserData = async () => {


        await auth.onAuthStateChanged((user) => {
            if (user) {
                uid = user.uid;
                db.collection("Users")
                    .doc(uid)
                    .get()
                    .then(doc => {
                        const data = doc.data();
                        console.log(data);
                        setAddress(data.city);
                        setName(data.name);
                        setPhoneNo(data.phone);
                        setEmail(data.email)
                    });

            } else {
                console.log("Signed Out");
            }
        });
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const db = firebase.firestore();
    const storage = firebase.storage();

    async function editUserdetails(event) {
        event.preventDefault();
        await auth.onAuthStateChanged((user) => {
            if (user) {
                uid = user.uid;
                const uploadTask = storage.ref("Users/" + uid).put(profileImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (err) => {
          console.log(err.message);
        },
        () => {
          storage
            .ref("Users")
            .child(uid)
            .getDownloadURL()
            .then((imageUrl) => {

                db.collection("Users").doc(uid).update({
                    city: address,
                    name: name,
                    phone: phoneno,
                    email: email,
                    imageUrl:imageUrl,
                }).then(() => {
                    setAddress("");
                    setName("");
                    setPhoneNo("");
                    setupdateState(true);
                });
            });
         }
         );
            }
        });
        
    }
    return (
        
        <div>
        {updatestate ? <Redirect to = "/userdashboard"/>: null}
        
            <div className="add-package-form-section">
                <h2 className="add-package-form-section-title">Basic Details</h2>
                <hr />
                <Form className="form-add-package">
                    <Form.Group className="add-package-form-group" controlId="user-name">
                        <Form.Label className="add-package-form-label">Name</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" type="text" name="name" value={name} />
                    </Form.Group>
                    <Form.Group className="add-package-form-group" controlId="user-Phone-no">
                        <Form.Label className="add-package-form-label">Phone No</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" type="text" name="phoneno" value={phoneno} />
                    </Form.Group>
                    <Form.Group className="add-package-form-group" controlId="user-Address">
                        <Form.Label className="add-package-form-label">Address</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" type="text" name="address" value={address} />
                    </Form.Group>
                    <Form.Label controlId="profileImage">
                    Add your photo
                  </Form.Label>
                  <Form.File
                    onChange={handleProfileImageChange}
                    id="userImage"
                  />
                </Form>
            </div>
            <div className="add-package-form-section">
                <Form className="form-add-package">
                    <Form.Group>
                        <Button className="add-package-button" onClick={editUserdetails} variant="primary">Update Details</Button>
                    </Form.Group>
                </Form>
                
            </div>
        </div>
    );

}
export default EditUser;