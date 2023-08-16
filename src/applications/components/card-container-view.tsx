import {LegendTitle,Container, moreProps} from '@adapter/components';

interface props {
    title? : string, 
    children: React.ReactNode | React.ReactNode[],
    more?: moreProps
}
export function CardContainerView({title, more, children}: props){
    const {position} = more ?? {};
    return (
        <div className="container-wrapper">
        {title ? <LegendTitle title={title} more={position === 'top' ? more : undefined}/> : null }
        <Container>
            {children}
        </Container>
        {
            position === 'bottom' ? <Footer more={more} /> : null
        }
   </div>
    )
}


function Footer({more}:{ more?: moreProps}){
    return (
        <>
        <div style={{ textAlign: 'center', padding: "15px 10px", textDecoration: 'underline' }}>
            <a onClick={more?.onclick}>{more?.text}</a>
        </div>
        </>
    );
}