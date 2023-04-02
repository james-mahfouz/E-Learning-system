import axios from 'axios';
import { useEffect, useState } from 'react';

const EnrollClasses = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get('http://localhost:4000/user/get_courses', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setCourses(response.data.data);
            } catch (e) {
                setError(e.message);
            }
        };
        getCourses();
    }, []);

    const handleEnroll = async (id) => {
        console.log(`Enrolling in course ${id}`);

        try {
            const response = await axios.post(`http://localhost:4000/user/enroll/${id}`, null, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log(response)
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Enroll</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course._id}>
                            <td>{course._id}</td>
                            <td>{course.name}</td>
                            <td><button onClick={() => handleEnroll(course._id)}>Enroll</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnrollClasses;