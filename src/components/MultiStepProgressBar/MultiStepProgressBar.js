import React from "react";
import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
    var stepPercentage = 0;
    if (page === "pageone") {
      stepPercentage = 10;
    } else if (page === "pagetwo") {
      stepPercentage = 30;
    } else if (page === "pagethree") {
      stepPercentage = 50;
    } else if (page === "pagefour") {
      stepPercentage = 70;
    } else if (page === "pagefive") {
      stepPercentage = 90; // Adjust the percentage as needed
    } else if (page === "pagesix") {
      stepPercentage = 100; // Adjust the percentage as needed
    } else {
      stepPercentage = 0;
    }
    

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("1")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            {index + 1}
          </div>
        )}
      </Step>

      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("5")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("6")}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
