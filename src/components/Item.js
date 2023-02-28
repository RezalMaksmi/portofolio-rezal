import './Main.css';


const Item = (props) => {
    return(
        <div className='item-project'>
            <div className='wrap-img'><img src={props.gambar} alt=""/></div>
            <h2>{props.judul}</h2>
            <p className='p-project'>{props.deskripsi}</p>
        </div>
    )
}

export default Item;