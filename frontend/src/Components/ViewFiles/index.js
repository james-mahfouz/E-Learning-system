import axios from 'axios';
import { useEffect, useState } from 'react';

const ViewFiles = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const getFiles = async () => {
            try {
                const response = await axios.get('http://localhost:4000/user/get_files', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setFiles(response.data.data);
            } catch (e) {
                console.log(e.message);
            }
        };
        getFiles();
    }, []);

    const handleView = async (name) => {
        window.open(`http://localhost:4000/public/${name}`, '_blank');
    };
    const handleDownload = async (fileName) => {
        try {
            const response = await axios.get(
                `http://localhost:4000/public/${fileName}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    responseType: "blob",
                }
            );
            const blob = new Blob([response.data], { type: response.headers["content-type"] });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Course ID</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file) => (
                        <tr key={file.name}>
                            <td>{file.name}</td>
                            <td><button onClick={() => handleView(file.name)}>View File</button></td>
                            <td><button onClick={() => handleDownload(file.name)}>Download File</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default ViewFiles;