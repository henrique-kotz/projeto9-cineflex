import loading from '../assets/img/loading.gif';

export default function Loading() {
    return (
        <div className="loading">
            <img src={loading} alt="Loading..." />
        </div>
    );
}