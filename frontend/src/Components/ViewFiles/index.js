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
        console.log(`viewing file ${name}`);
        window.open(`http://localhost:4000/public/${name}`, '_blank');
        // try {
        //     const response = await axios.post(`http://localhost:4000/user/enroll/${id}`, null, {
        //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        //     });
        //     console.log(response)
        // } catch (e) {
        //     console.log(e.message);
        // }
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewFiles;