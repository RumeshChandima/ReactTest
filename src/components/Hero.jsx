import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap'
import pngImage from "../../src/assets/logo192.png"

//class componentes
class Hero extends Component {
    state = {
        heroId: 101,
        heroName: this.props.heroName,
        movies: this.props.movie,
        likeCount: this.props.likeCount,
        age : this.props.age,
        imageUrl: this.props.imageUrl
    };
    render() {
        return (
            <React.Fragment>
                {/* //     <h1 style={{ color: "blue", fontSize: "40px" }}>Hero Component :{this.isHero()}</h1>
            //     <button type="button" className="btn btn-primary">{this.state.heroId}</button> */}


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.imageUrl} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {this.state.heroName}
                            <ul>
                                <li>Super Power 1</li>
                                <li>Super Power 2</li>
                                <li>Super Power 3</li>
                            </ul>
                            <p>Movies</p>
                            <ul>
                                {this.state.movies}
                            </ul>
                        </Card.Text>
                        <div>
                            <Button style={{ textAlign: "center" }} variant="btn btn-primary" onClick={() =>
                                this.likeAvenger(10)}>Go somewhere{""}
                                <span className="badge badge-light">{this.state.likeCount}</span></Button>
                        </div>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
    getHeroName() {
        alert(this.state.heroName);
    }
    isHero() {
        return this.state.heroId < 1000 ? "Already an avenger" : "Not an avenger";
    }
    showMovies() {
        if (this.state.movies.length > 0) {
            return this.state.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
            ));
        }
        else {
            return <p>No Movies Found</p>
        }
    }
    likeAvenger = (param1) => {
        this.setState({ likeCount: this.state.likeCount + 1 })

        console.log(param1)
    }
}

export default Hero;