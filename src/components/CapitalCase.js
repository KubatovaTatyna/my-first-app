const CapitalCase = ({items}) => {
    let list = items.map(item => {
        return <li>{item.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})}</li>
    });

    return <ul>{list}</ul>
}
export default CapitalCase;
