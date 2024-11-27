import { useEffect, useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Modify(){
    const [formData, setFormData] = useState({
        name: '',
        shape_type: '',
        defining_equation: '',
        favorite_job: '',
        curvature_personality: '',
        coolness: 0,
    });
    const [geometry, setGeometry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGeometry = async () => {
          try {
            const response = await fetch(`http://localhost:3000/geometry/${id}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setFormData({
                name: data.name || '',
                shape_type: data.shape_type || '',
                defining_equation: data.defining_equation || '',
                favorite_job: data.favorite_job || '',
                curvature_personality: data.curvature_personality || '',
                coolness: data.coolness || 0,
            });
            setGeometry(data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchGeometry();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`http://localhost:3000/geometry/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          navigate('/listazas');
        } catch (err) {
          setError(err.message);
        }
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: name === 'coolness' ? parseInt(value) : value,
        }));
    };

    if (loading) return <p>Loading geometry...</p>;
    if (error) return <p>Error fetching data: {error}</p>;
    
    return <>
        <div className="container mt-4">
      <h1>Modify Geometry</h1>
      <form id="geometryEdit" style={{ maxWidth: '600px', margin: 'auto' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div>
            <label htmlFor="shape_type">Shape Type</label>
            <input
              type="text"
              id="shape_type"
              name="shape_type"
              value={formData.shape_type}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div>
            <label htmlFor="defining_equation">Defining Equation</label>
            <input
                type='text'
                id="defining_equation"
                name="defining_equation"
                value={formData.defining_equation}
                onChange={handleChange}
                className="form-control"
            />
          </div>

          <div>
            <label htmlFor="favorite_job">Favorite Job</label>
            <input
                type="text"
                id="favorite_job"
                name="favorite_job"
                value={formData.favorite_job}
                onChange={handleChange}
                className="form-control"
            />
          </div>

          <div>
            <label htmlFor="curvature_personality">Curvature Personality</label>
            <input
                type="text"
                id="curvature_personality"
                name="curvature_personality"
                value={formData.curvature_personality}
                onChange={handleChange}
                className="form-control"
            />
          </div>

          <div>
            <label htmlFor="coolness">Coolness</label>
            <input
              type="number"
              id="coolness"
              name="coolness"
              value={formData.coolness}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: '20px', padding: '10px 20px' }}
        >
          Save Changes
        </button>
      </form>
    </div>
    </>
}