const ListOl = ({items}) => {
    let list = [];
    items.forEach(item => {
        list.push(<li>{item}</li>)
    });

    return <ol>{list} </ol>
}
export default ListOl;