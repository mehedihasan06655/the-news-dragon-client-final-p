import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInSights from "../EditorsInSights/EditorsInSights";

const News = () => {
    const news = useLoaderData()
    const { _id, title, details, image_url, category_id } = news;

    return (
        <div>
            <Card className="mb-4 mt-4">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger">
                            <FaArrowLeft />
                            All News in this Category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInSights/>
        </div>
    );
};

export default News;