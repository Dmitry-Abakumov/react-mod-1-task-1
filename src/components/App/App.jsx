import css from 'components/App/App.module.css'
import Box from 'components/Box/Box'
import Header from 'components/Header/Header'
import CardList from 'components/CardList/CardList'
import cardListData from 'cardListData/cardListData.json'


function App() {
  return <main>
    <Box pr="10px" pl="10px"  ml="auto" mr="auto" maxWidth="1200px">
      <Header />
      <CardList cardListData={cardListData} />
    </Box>
  </main>;
}

export default App;
