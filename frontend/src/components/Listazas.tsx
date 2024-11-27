import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Listazas(){
    const [geometries, setGeometries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchGeometries = async () => {
        try {
          const response = await fetch("http://localhost:3000/geometry");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setGeometries(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchGeometries();
    }, []);
  
    const handleDelete = async (geometryId: number) => {
        try {
            const response = await fetch(`http://localhost:3000/geometry/${geometryId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setGeometries(prevGeometries => prevGeometries.filter(geometry => geometry.id !== geometryId));
                console.log('geometry deleted successfully');
            } else {
                console.error('Failed to delete geometry');
            }
        } catch (error) {
            console.error('Error deleting geometry:', error);
        }
    };

    const handleChange = (id: number) => {
        navigate(`/edit/${id}`);
    };

    if (loading) return <p>Loading geometries...</p>;
    if (error) return <p>Error fetching data: {error}</p>;




    return <>
        <div className="container mt-4">
            <h1>Minimal Geometry listázás</h1>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>shape_type</th>
                    <th>defining_equation</th>
                    <th>favorite_job</th>
                    <th>curvature_personality</th>
                    <th>coolness</th>
                    <th>Törlés</th>
                    <th>Módosítás</th>
                </tr>
                </thead>
                <tbody>
                {geometries.map((geometry) => (
                    <tr key={geometry.id}>
                    <td>{geometry.id}</td>
                    <td>{geometry.name}</td>
                    <td>{geometry.shape_type}</td>
                    <td>{geometry.defining_equation}</td>
                    <td>{geometry.favorite_job}</td>
                    <td>{geometry.curvature_personality}</td>
                    <td>{geometry.coolness}</td>
                    <td><button className="btn btn-danger" onClick={() => {handleDelete(geometry.id)}}>Törlés</button></td>
                    <td><button className="btn btn-primary" onClick={() => {handleChange(geometry.id)}}>Módosítás</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>
}