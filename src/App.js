import Header from './Header';
import MainImage from './MainImage';
import CenteredText from './CenteredText';
import ArticleCardlist from './ArticleCardList';
import RoundedButton from './RoundedButton';
import TutorialCardList from './TutorialCardList';
import Newsletter from './Newsletter';
import Footer from './Footer';

function App() {
  return (
    <div >
      <Header/>
      
      <MainImage/>
      
      <CenteredText text="Featured Articles" />
      
      <ArticleCardlist/>
      
      <RoundedButton text = "See all articles"/>
      
      <CenteredText text="Featured Tutorials" />
      
      <TutorialCardList/>
      
      <RoundedButton text = "See all tutorials"/>

      <Newsletter/>

      <Footer/>
    </div>
  );
}

export default App;
