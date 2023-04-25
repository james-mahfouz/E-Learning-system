import { FileUpload } from 'primereact/fileupload';
import React, { useState } from 'react';
import axios from 'axios';

const UploadFiles = () => {
    const [uploadedFile, setUploadedFile] = useState([]);

    const onUpload = (event) => {
        const data = new FormData();
        data.append('file', event.files[0]);

        const token = localStorage.getItem('token');

        console.log("function entered")
        axios.post('http://localhost:4000/admin/upload_file', data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log('File uploaded successfully', response.data);
                // setUploadedFile([...uploadedFile, response.data]);
            })
            .catch((error) => {
                // console.error('Error uploading file', error);
            });
    };

    return (
        <div className="card">
            <FileUpload
                name="demo[]"
                customUpload={true}
                uploadHandler={onUpload}
                multiple
                accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                maxFileSize={100000000000000}
                emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}

            />
        </div>
    );
};

export default UploadFiles;
