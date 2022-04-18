import React, { Component } from "react";

class ReviewGenerator extends Component {
  constructor() {
    super();
    const currentNumber = 0;
    this.state = {
      reviews: this.reviews[currentNumber],
    };
  }

  animationTime = 400;

  //removes old review with a fade-out animation, then generates the new review with a fade-in animation
  generateReview = () => {
    this.clientClasses = this.defaultClientClasses + " fade-out ";
    this.reviewClasses = this.defaultReviewClasses + " fade-out ";
    this.forceUpdate();

    setTimeout(() => {
      let index = this.reviews.indexOf(this.state.reviews);
      if (index === this.reviews.length - 1) index = -1;
      index++;
      console.log(index);
      this.setState({ reviews: this.reviews[index] });
    }, this.animationTime)

  };

  reviews = [
    {
      review: "Really friendly staff !",
      client: "Josh",
    },
    {
      review: "Their pepperoni pizza is to die for",
      client: "Taylor",
    },
    {
      review: "Amazing experience, 10/10",
      client: "Courtney",
    },
    {
      review: "I think I've found my new favorite place",
      client: "Vivian",
    },
    {
      review: "The meat is really fresh !",
      client: "Alex"
    },
    {
      review: "The interior is really cozy, this place almost feels like a second home",
      client: "Joey"
    },
  ];

  removeFadeOutClasses = () => {
    this.clientClasses = this.defaultClientClasses + " fade-in";
    this.reviewClasses = this.defaultReviewClasses + " fade-in";
    this.forceUpdate();
  };

  //when the component is created, we generate a review every 30 seconds with setInterval()
  componentDidMount() {
    this.timerHandle = setInterval(() => {
      this.generateReview();
      setTimeout(this.removeFadeOutClasses, this.animationTime*2);
    }, 30000);
  }

  //when the component is removed, we stop the interval
  componentWillUnmount() {
    clearInterval(this.timerHandle);
  }

  defaultClientClasses = "w-full flex pr-5 font-bold text-primary_darker ";
  defaultReviewClasses = "w-full text-center pr-5 pl-5 font-semibold text-primary_darker ";
  clientClasses = this.defaultClientClasses;
  reviewClasses = this.defaultReviewClasses;

  render() {
    const { reviews } = this.state;
    return (
      <div className="relative flex flex-col h-full justify-center">
        <div className="relative flex flex-col w-3/5 mr-auto ml-auto text-lg pt-10 pb-10 rounded-3xl bg-opacity-25 bg-yellow-200">
          <div id="review" className={this.reviewClasses}>
            "{reviews.review}"
          </div>
          <div className={this.clientClasses}>
            <div className="w-3/4"></div>
            <cite id="review-client" className="w-1/4">
              - {reviews.client}
            </cite>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewGenerator;
