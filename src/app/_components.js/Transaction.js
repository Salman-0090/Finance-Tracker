export default function Transaction({transaction}) {
   

    if (!transaction) {
        return <p>Transaction is undefined</p>;
    }

    return (<ul className="flex gap-4 justify-center">
            <li>{transaction.type}</li>
            <li>{transaction.description}</li>
            <li>{transaction.amount}</li>
            <li>{transaction.category}</li>

    </ul>)
}