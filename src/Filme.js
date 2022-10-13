
import { Link } from "react-router-dom"

export default function Filme({data }) {

    return (
        <Link to={`/sessoes/${data.id}`} className="itemFilme" data-identifier="movie-outdoor">
            <img src={data.posterURL} alt={data.title} />
        </Link>
    )
}