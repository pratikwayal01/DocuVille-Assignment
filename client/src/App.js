import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Importing the CSS file

function App() {
    const [file, setFile] = useState(null);
    const [documentType, setDocumentType] = useState('driving_license'); // Default type
    const [extractedData, setExtractedData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setError(''); // Clear error on new file selection
    };

    const handleTypeChange = (e) => setDocumentType(e.target.value);

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('documentType', documentType);

        setLoading(true); // Show loader

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setExtractedData(response.data);
            setError(''); // Clear any previous errors
        } catch (error) {
            console.error('Error uploading file:', error);
            setError('Error uploading file. Please try again.');
        } finally {
            setLoading(false); // Hide loader after upload
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
            setError('');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const renderExtractedData = () => {
        if (documentType === 'driving_license') {
            return (
                <div className="data-display">
                    <h2>Driving License Information</h2>
                    <p><strong>Name:</strong> {extractedData.name}</p>
                    <p><strong>Document Number:</strong> {extractedData.documentNumber}</p>
                    <p><strong>Expiration Date:</strong> {extractedData.expirationDate}</p>
                    <p><strong>Date of Birth:</strong> {extractedData.dateOfBirth}</p>
                </div>
            );
        } else if (documentType === 'passport') {
            return (
                <div className="data-display">
                    <h2>Passport Information</h2>
                    <p><strong>Name:</strong> {extractedData.name}</p>
                    <p><strong>Document Number:</strong> {extractedData.documentNumber}</p>
                    <p><strong>Expiration Date:</strong> {extractedData.expirationDate}</p>
                    <p><strong>Date of Birth:</strong> {extractedData.dateOfBirth}</p>
                </div>
            );
        }
        return null; // In case of unexpected document type
    };

    return (
        <div className="app-container">
            <h1>Document Data Extraction</h1>
            <div className="upload-section" 
                onDrop={handleDrop} 
                onDragOver={handleDragOver}
                style={{ border: file ? '2px dashed #28a745' : '2px dashed #ccc' }}>
                <input 
                    type="file" 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                    id="file-input" 
                />
                <label htmlFor="file-input" className="file-upload-label">
                    {file ? file.name : "Drag & Drop your file here or click to select"}
                </label>
                <select value={documentType} onChange={handleTypeChange}>
                    <option value="driving_license">Driving License</option>
                    <option value="passport">Passport</option>
                </select>
                <button onClick={handleUpload}>Upload</button>
            </div>
            {loading && <div className="loader">Uploading...</div>}
            {error && <div className="error-message">{error}</div>}
            {!loading && Object.keys(extractedData).length > 0 && renderExtractedData()}
        </div>
    );
}

export default App;
