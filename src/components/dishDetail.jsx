import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

    const renderComments = (comments) =>{
        let commenting = comments.map(comment => {
            return (
                <div key={comment.id}>
                    <h6>{comment.comment}</h6>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    
                </div>
            );
        });
        return commenting;
    }
    const Dishdetail = ({ dish }) => {
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {renderComments(dish.comments)}
                    </div>
                </div>
            </div>
        );
    }

        

 
export default Dishdetail;