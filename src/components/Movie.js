export default function Movie(props) {
    const { title, posterURL } = props.movie;

    return (
        <li>
            <img src={posterURL} alt={title} />
        </li>
    );
}