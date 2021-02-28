const UpperCaseList = ({items}) => {
    let list = items.map(item => {
        return <li>{item.toUpperCase()}</li>
    });

    return <ul>{list}</ul>
}
export default UpperCaseList;
