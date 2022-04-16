import React, { Component } from "react";

class ReviewGenerator extends Component {
  currentNumber;

  constructor() {
    super();
    this.currentNumber = 0;
    this.state = {
      reviews: this.reviews[this.currentNumber]
    };
  }

  generateReview = () => {
    let index = this.reviews.indexOf(this.state.reviews);
    if (index === this.reviews.length - 1) index = -1;
    index++;
    console.log(index);
    this.setState({ reviews: this.reviews[index] });
  };

  reviews = [
    {
      quote: "Really friendly staff !",
      client: "Josh",
    },
    {
      quote: "Their pepperoni pizza is to die for",
      client: "Taylor",
    },
    {
      quote: "Amazing experience, 10/10",
      client: "Courtney",
    },
    {
      quote: "I think I've found my new favorite place",
      client: "Vivian",
    },
    {},
  ];

  componentDidMount() {
    this.timerHandle = setInterval(this.generateReview, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerHandle);
  }


  render() {
    const { reviews } = this.state;
    return (
      <div className="relative flex flex-col h-full justify-center">
        <div className="relative flex flex-col w-3/5 mr-auto ml-auto pt-10 pb-10 rounded-3xl bg-opacity-25 bg-yellow-200">
          <div
            id="quote"
            className="w-full text-center pr-5 pl-5 font-semibold"
          >
            "{reviews.quote}"
          </div>
          <div className="w-full flex pr-5 font-bold">
            <div className="w-3/4"></div>
            <cite id="quote-client" className="w-1/4">
              - {reviews.client}
            </cite>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewGenerator;
