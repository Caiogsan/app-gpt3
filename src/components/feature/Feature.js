import './feature.css'

function Feature({title, text, styles}){
    return (
    <div className={`gpt3__features-container__feature ${styles}`}>
        <div className="gpt3__features-container__feature-title">
            <div></div>
            <h1>{title}</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
            <p>{text}</p>
        </div>
  </div>
    )
}

export default Feature