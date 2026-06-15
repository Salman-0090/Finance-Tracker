

import Transactions from "../../_components.js/Transactions";


export default async function Page({searchParams}) {
        const resolvedSearchPramas = await searchParams
        return (<div>
            <Transactions searchParams={resolvedSearchPramas}/>
        </div>)
}