

function Container({children}:{children: React.ReactNode[]}){
    return (
    <div className="overall-list" style={{display: 'flex', flexDirection: 'row'}}>
        {children}
    </div>
    )
}

export default Container;