---

# 📝 Document Capture App

## 📖 Overview
The Document Capture App is a web application that allows users to upload images of important documents, such as driving licenses and passports, and extract key information from them using Optical Character Recognition (OCR) technology. This project leverages Tesseract.js for OCR processing and provides a user-friendly interface for document handling.

## 🚀 Features
- **File Upload**: Easily upload images or PDFs of your documents.
- **OCR Processing**: Automatically extracts text from uploaded images using Tesseract.js.
- **Document Type Selection**: Choose between different document types to apply relevant extraction rules.
- **Extracted Information**: Displays extracted details such as:
  - 📛 Name
  - 🆔 Document Number
  - 📅 Expiration Date

## 🖥️ Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **OCR Library**: Tesseract.js
- **File Upload**: Multer
- **Data Storage**: JSON

## 🌐 Getting Started

### 📦 Prerequisites
- Node.js (v14 or above)
- npm (Node Package Manager)

### 🔧 Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/pratikwayal01/Docuville-assignment.git
   cd document-capture-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the backend server**:
   ```bash
   node server.js
   ```
   The server will start on `http://localhost:5000`.

4. **Run the frontend**:
   In another terminal, navigate to the frontend directory and run:
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:3000`.

### 📁 File Structure
```
-Media
document-capture-app/
├── frontend/              # React frontend code
├── uploads/               # Temporary storage for uploaded files
├── server.js              # Node.js server code
└── package.json           # Project metadata and dependencies
```

## 🎨 UI Elements
- **Upload Button**: A button to trigger the file upload dialog.
- **Document Type Dropdown**: A dropdown menu to select the type of document being uploaded (Driving License or Passport).
- **Extracted Details Display**: A section to show the results of the OCR processing, including name, document number, and expiration date.

## 📄 Usage
1. Select the type of document you are uploading from the dropdown menu.
2. Click the "Upload" button to choose your file.
3. The application will process the file and display the extracted details.

## 📚 Example Output
After uploading a driving license:
```json
{
  "name": "Name Surname",
  "documentNumber": "MH17 20160001642",
  "expirationDate": "11-01-2036"
}
```

## 🛠️ Future Enhancements
- Support for additional document types (e.g., ID cards).
- Improve OCR accuracy with custom training data.
- Add user authentication for personal document storage.

## 💬 Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---