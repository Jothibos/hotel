 // App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Footer from './components/Footer';  
import recipesData from './data/recipes.json';

class App extends React.Component {
  state = {
    selectedRecipe: null,
  };

  handleRecipeClick = (recipe) => {
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    const { selectedRecipe } = this.state;

    return (
      <div className="app">
        <Header />
        <main className="app-main">
          <RecipeList recipes={recipesData.recipes} onRecipeClick={this.handleRecipeClick} />
          {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
        </main>
        <Footer />  
      </div>
    );
  }
}

export default App;
