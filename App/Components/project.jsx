import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="about-list">
                    {this.props.projects.map((item, key) => (
                        <div className="flip-card" key={key}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {item.photo && <img src={item.photo} alt={"photo"}/>}
                                    <h2>{item.title}</h2>
                                    {item.subtitle && <p>{item.subtitle}</p>}
                                </div>
                                <div className="flip-card-back">
                                    <div className={"flip-card-content"}>
                                        <p>{item.description}</p>
                                        {item.source && item.source.map((link, key) => (
                                            <a href={link.url} target={"_blank"} key={key}>({link.title})</a>
                                        ))}
                                        {item.website && <a href={item.website} target={"_blank"}>(Website)</a>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

Project.displayName = 'Project';
export default Project; 
