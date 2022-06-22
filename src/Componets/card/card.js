import { Form } from 'formik';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button } from 'reactstrap';

function card(props) {
    const data = [
        {
            name: "amit",
            age: 35,
            salary: 40000,
            bonus: 1000,
            status: true
        },
        {
            name: "ajay",
            age: 25,
            salary: 38000,
            bonus: 2000,
            status: false
        },
        {
            name: "mayur",
            age: 23,
            salary: 50000,
            bonus: 500,
            status: true
        },
        {
            name: "jay",
            age: 29,
            salary: 35000,
            bonus: 600,
            status: true
        },
        {
            name: "raj",
            age: 33,
            salary: 22000,
            bonus: 2000,
            status: true
        },
    ]
 console.log(data);
    return (
   
         
          
        <div>
            <Card>

                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button>
                    delet
                    </Button>

                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button>
                    delet
                    </Button>

                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button>
                         delet
                    </Button>
                
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button>
                         delet
                     </Button>
 
                </CardBody>

                
            </Card>
        </div>
    );
}

export default card;