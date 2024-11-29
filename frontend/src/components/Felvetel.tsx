export function Felvetel() {
    try {
        return <>
            <h1>Felvétel</h1>
            <form method="post" target="http://localhost:3000/geometry">
                <label htmlFor="name">Name:</label><input type="text" name="name"/><br />
                <label htmlFor="shape_type">Shape Type:</label><input type="text" name="shape_type"/><br />
                <label htmlFor="defining_equation">Defining Equation:</label><input type="text" name="defining_equation"/><br />
                <label htmlFor="favorite_job">Favorite Job:</label><input type="text" name="favorite_job"/><br />
                <label htmlFor="curvature_personality">Curvature Personality:</label><input type="curvature_personality" name="name"/><br />
                <label htmlFor="coolness">Coolness:</label><input type="number" name="coolness"/><br />
                <input type="submit" value={"Submit"} onClick={()=>console.log("lefut")}/>
            </form>
        </>
    } catch (error) {
        console.log(error)
    }
}