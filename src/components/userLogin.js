import React, { useState } from 'react';
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import contractABI from "./contractABI.json";



const rpcUrl = "http://localhost:8545";
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

const ipfs = create({ host: "ipfs.infura.io", port: 5001, protocol: "https:" });




function UserLogin() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleProfileImageChange = (event) => {
        setProfileImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const reader = new FileReader();

        reader.onloadend = async () => {
            const buffer = new ArrayBuffer(16);
const view = new Uint8Array(buffer);
for (let i = 0; i < view.length; i++) {
  view[i] = i;
}

// Convert the ArrayBuffer to a hexadecimal string
const hexString = ethers.utils.arrayBufferToHex(buffer);

console.log(hexString);
        };

        reader.readAsArrayBuffer(profileImage);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name-input">Name</label>
                    <input id="name-input" type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="email-input">Email</label>
                    <input id="email-input" type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="bio-input">Bio</label>
                    <textarea id="bio-input" value={bio} onChange={handleBioChange} />
                </div>
                <div>
                    <label htmlFor="profileImage-input">Profile Picture</label>
                    <input id="profileImage-input" type="file" accept="image/*" onChange={handleProfileImageChange}/>
                </div>
                <button type='submit'>create writer</button>
            </form>
        </div>
    );
};

export default UserLogin;