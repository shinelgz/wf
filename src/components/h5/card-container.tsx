

function CardContainer({children}:{children: React.ReactNode[]}){
    return (
    <div className="card-container  overall-list" style={{display: 'flex', flexDirection: 'column'}}>
        {children}
    </div>
    )
}

export default CardContainer;