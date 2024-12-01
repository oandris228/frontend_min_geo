import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Pagination(){
    const [geometries, setGeometries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState<boolean>(true);
    const [fetchlink, setFetchlink] = useState("http://localhost:3000/geometry/pagination");
    const navigate = useNavigate();


    function handlePageChange(page: number): void {
        setCurrentPage(page);
    }

    useEffect(() => {
      const fetchGeometries = async () => {
        try {
          const response = await fetch(`http://localhost:3000/geometry/pagination?page=${currentPage}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setGeometries(data);
          setIsNextPageAvailable(data.length > 0);
        } catch (err) {
          setError(err.message);
          setIsNextPageAvailable(false);
        } finally {
          setLoading(false);
        }
      };
  
      fetchGeometries();
    }, [currentPage]);

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
            <div>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                Előző
                </button>
            </div>
            <div>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!isNextPageAvailable}
                >
                Következő
                </button>
            </div>
        </div>
    </>
}