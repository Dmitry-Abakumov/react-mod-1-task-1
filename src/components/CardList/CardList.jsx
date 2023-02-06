import css from 'components/CardList/CardList.module.css';
import Box from 'components/Box/Box'

const CardList = ({ cardListData }) => {
    return (
        <ul>
            {(cardListData.map(({id, cardTitle, text, url }) =>
                <Box key={id} display="flex" as="li">
                    <div>
                        <h2>{cardTitle}</h2>
                        <p>{text}</p>
                    </div>
                    
                    <img src={url} alt="" />
                </Box>
            ))}
        </ul>
    )
} 

export default CardList