import Card from './Card'
import './Card.css'
import articleList from './articleList'

 function cardComponent(article,  i)
 {
    return <Card
    key={article.key}
    avatar={article.avatar}
    name={article.name}
    description={article.description}
    rating = {article.rating}
/>
 }
function ArticleCardList() {
    return (
        <div className='row'>
           { articleList.map(cardComponent)}
        </div>
    )

}

export default ArticleCardList