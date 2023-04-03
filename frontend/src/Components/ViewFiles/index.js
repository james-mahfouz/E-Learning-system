import axios from 'axios';
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';

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
            <DataTable value={files} className="p-datatable-striped">
                <Column field="name" header="Course ID" />
                <Column header="" body={(rowData) => (
                    <Button label="View File" icon="pi pi-eye" onClick={() => handleView(rowData.name)} />
                )} />
                <Column header="" body={(rowData) => (
                    <Button label="Download File" icon="pi pi-cloud-download" onClick={() => handleDownload(rowData.name)} />
                )} />
            </DataTable>
        </div >
    );
};

export default ViewFiles;