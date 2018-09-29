import React, { Component } from 'react';
import './App.css';
import animals from "./animals.json";
import AnimalsCard from "./components/AnimalsCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";



class App extends Component {
  state = {
    message: "Click an animal to begin!",
    topScore: 0,
    curScore: 0,
    animals: animals,
    unselectedAnimals: animals
  }

  componentDidMount() {

  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectAnimals = kind => {
    const findAnimal = this.state.unselectedAnimals.find(item => item.kind === kind);

    if (findAnimal === undefined) {
      this.setState({
        message: "Incorrect guess!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        animals: animals,
        unselectedAnimals: animals
      });
    }
    else {
      const newAnimals = this.state.unselectedAnimals.filter(item => item.kind !== kind);

      this.setState({
        message: "You guessed correct!",
        curScore: this.state.curScore + 1,
        animals: animals,
        unselectedAnimals: newAnimals
      });
    }

    this.shuffleArray(animals);
  };

  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Title />
        {
          this.state.animals.map(animals => (
            <AnimalsCard
              kind={animals.kind}
              image={animals.image}
              selectAnimals={this.selectAnimals}
              curScore={this.state.curScore}
            />
          ))
        }

      </Wrapper>
    );
  }
}

export default App;
