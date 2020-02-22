import React, { Component } from 'react';
import Hero from "../components/Hero";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap'
import pngImage from "../../src/assets/logo192.png"
import axios from 'axios';

//class componentes
class Heroes extends Component {
    state = {
        allHeroes: [

        ]
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allHeroes.map((h, index) =>(
                        <div key={h.id} className= "col"><Hero likeCount= {h.likeCount} heroName={h.heroName} imageUrl ={h.imageUrl} movies ={h.movies}/></div>
                    ))}

                </div>
            </div>
        )
    }

    async componentDidMount(){
        const {data} = await axios.get("http://localhost:3000/api/heros/");
        console.log(data);

        let heroes = data.map(hero =>{
            return {
                id: hero.id,
                heroName: hero.name,           
                age: hero.age,
                likeCount : hero.likeCount,
                movies : hero.movie,
                imageUrl : hero.imageUrl
            };
        });
        this.setState({allHeroes: heroes});
    }
}
export default Heroes;