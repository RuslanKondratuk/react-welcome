export const ListCreate = (props) =>  {
        return (props.card.map((obj) => {
                console.log(obj)
                return  <section className='container' key={obj.id}>
                <img src={obj.image} alt={obj.title} className='img'/>
                <ul >
                    <li>{obj.category}</li>
                    <li>{obj.description}</li>
                    <li>{obj.title}</li>
                    <li>{obj.price}</li>
                </ul>
                </section>}
        ))

}

