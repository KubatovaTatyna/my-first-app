const Root = ({ items }) => {

    return <table>
        <tr>
            <td>{items[0]}</td>
            <td>{Math.sqrt(items[0])}</td>
        </tr>
        <tr>
            <td>{items[1]}</td>
            <td>{Math.sqrt(items[1])}</td>
        </tr>
        <tr>
            <td>{items[2]}</td>
            <td>{Math.sqrt(items[2])}</td>
        </tr>
        <tr>
            <td>{items[3]}</td>
            <td>{(Math.sqrt(items[3]))}</td>
        </tr>
    </table>

}
export default Root;
