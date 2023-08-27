import Card from './Card'
import './Card.css'
import tutorialList from './tutorialList'

 function cardComponent(tutorial,  i)
 {
    return <Card
    key={tutorial.key}
    avatar={tutorial.avatar}
    name={tutorial.name}
    description={tutorial.description}
    rating = {tutorial.rating}
/>
 }
function TutorialCardList() {
    return (
        <div className='row'>
           { tutorialList.map(cardComponent)}
        </div>
    )

}

export default TutorialCardList