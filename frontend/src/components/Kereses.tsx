import { useEffect, useState, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Kereses(){
    const [geometries, setGeometries] = useState([]);
    const [filteredGeometries, setFilteredGeometries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      const fetchGeometries = async () => {
        try {
          const response = await fetch("http://localhost:3000/geometry");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setGeometries(data);
          setFilteredGeometries(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchGeometries();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = geometries.filter(
            (geo) =>
                geo.name.toLowerCase().includes(term) ||
                geo.shape_type.toLowerCase().includes(term) ||
                geo.favorite_job.toLowerCase().includes(term) ||
                geo.curvature_personality.toLowerCase().includes(term)
        );
        setFilteredGeometries(filtered);
    };
  
    if (loading) return <p>Loading geometries...</p>;
    if (error) return <p>Error fetching data: {error}</p>;




    return <>
        <div className="container mt-4">
            <h1>Minimal Geometry Keresés</h1>

            <form>
                <label>
                    Keresés:
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Keresés..."
                    />
                </label>
            </form>

            <h2>Lista</h2>

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
                </tr>
                </thead>
                <tbody>
                {filteredGeometries.map((geometry) => (
                    <tr key={geometry.id}>
                    <td>{geometry.id}</td>
                    <td>{geometry.name}</td>
                    <td>{geometry.shape_type}</td>
                    <td>{geometry.defining_equation}</td>
                    <td>{geometry.favorite_job}</td>
                    <td>{geometry.curvature_personality}</td>
                    <td>{geometry.coolness}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>
}