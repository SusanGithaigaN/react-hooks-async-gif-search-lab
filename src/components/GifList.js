function GifList({gifs}){
    return (
        <ul className="GifList container">
           {gifs.map((gif) => (
            <li className="my-gifs" key={gif}>
            <img src={gif.url} alt="gif-here" />
            </li>
           ))}
        </ul>

    )
}
export default GifList;