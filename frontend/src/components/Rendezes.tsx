import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Rendezes(){
    const [geometries, setGeometries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fetchlink, setFetchlink] = useState("http://localhost:3000/geometry");
    const navigate = useNavigate();


    function sortPhones(order: string): void {
      setFetchlink(`http://localhost:3000/geometry/orderby/${order}`);
    }

    useEffect(() => {
      const fetchGeometries = async () => {
        try {
          const response = await fetch(fetchlink);
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
    }, [fetchlink]);

    if (loading) return <p>Loading geometries...</p>;
    if (error) return <p>Error fetching data: {error}</p>;

    return <>
        <div className="container mt-4">
            <h1>Minimal Geometry rendezés (coolness szerint)</h1>
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
                    <th>
                      <button
                          onClick={() => sortPhones('asc')}
                          style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                          >
                          &#8593;
                      </button>
                    </th>
                    <th>
                      <button
                            onClick={() => sortPhones('desc')}
                            style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                            &#8595;
                        </button>
                    </th>
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
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>
}