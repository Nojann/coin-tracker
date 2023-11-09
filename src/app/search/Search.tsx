export default function Search(){
    return(
        <div className="flex justify-center ">
            <div className="border-2 rounded-full border-gray-300 h-13 w-1/3 shadow flex flex-row">
                <div className="w-1/2">
                    <button className="btn btn-ghost rounded-full">Categorie</button>
                </div>
                <div className="divider lg:divider-horizontal m-0"></div>
                <div className="w-1/2">
                    <button className="btn btn-ghost rounded-full ">MarketCap Max</button>
                </div>
            </div>
        </div>
    )
}